import { useState, useEffect } from 'react';
import { deleteUser, getAuth, sendPasswordResetEmail, sendEmailVerification, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';
import Platform from 'react-platform-js'
import axios from 'axios';



// initialize firebase app
initializeFirebase();

const useFirebase = () => {


    const [info, setInfo] = useState([]);

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [alert, setAlert] = useState({
        isAlert: false,
        severity: 'info',
        message: '',
        timeout: null,
        location: '',
    });






    const os = Platform.OS // OS name, Mac OS
    const osVersion = Platform.OSVersion // OS version, 10.11
    const browser = Platform.Browser // Browser name, Chrome
    const browserVersion = Platform.BrowserVersion // Browser Version
    const engine = Platform.Engine // browser engine name
    // and ...
    const cpu = Platform.CPU
    const deviceType = Platform.DeviceType
    const deviceModel = Platform.DeviceModel
    const deviceVendor = Platform.DeviceVendor
    const ua = Platform.UA

    const [netDetails, setnetDetails] = useState([]);
    useEffect(() => {
        fetch(`https://ipinfo.io/json?token=bbf0b81c5263d3`)
            .then(res => res.json())
            .then(data => {

                setnetDetails(data);
            })
    }, [])

    const dateTime = new Date().toLocaleString();
    var today = new Date();

    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const userRegisterdDetails = {
        os: Platform.OS, // OS name, Mac OS
        osVersion: Platform.OSVersion, // OS version, 10.11
        browser: Platform.Browser, // Browser name, Chrome
        browserVersion: Platform.BrowserVersion, // Browser Version
        engine: Platform.Engine, // browser engine name
        cpu: Platform.CPU,
        deviceType: Platform.DeviceType,
        deviceModel: Platform.DeviceModel,
        deviceVendor: Platform.DeviceVendor,
        ua: Platform.UA,
        ipaddress: netDetails.ip,
        city: netDetails.city,
        region: netDetails.region,
        country: netDetails.country,
        loc: netDetails.loc,
        org: netDetails.org,
        poltal: netDetails.poltal,
        timezone: netDetails.timezone,
        dateTime: dateTime,
        date: date,
    }








    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const userfirebase = auth.currentUser;

    const registerUser = (email, password, name, country, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                // sendEmailVerification(auth.currentUser)
                //     .then(() => {
                //         // Email verification sent!
                //         // ...
                //     });
                const newUser = { email, displayName: name, country };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, country, 'POST');


                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                navigate('/');
            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    const verifybysendingemail = () => {
        sendEmailVerification(userfirebase)
            .then(() => {


            });

    }


    // Reset Password

    const sendPasswordReset = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Password reset link sent!");
        } catch (err) {

        }
    };


    const loginUser = (email, password, location, navigate) => {

        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');

                axios.post(`https://aqueous-ridge-88057.herokuapp.com/userlogs`, {
                    email, os: Platform.OS, // OS name, Mac OS
                    osVersion: Platform.OSVersion, // OS version, 10.11
                    browser: Platform.Browser, // Browser name, Chrome
                    browserVersion: Platform.BrowserVersion, // Browser Version
                    engine: Platform.Engine, // browser engine name
                    cpu: Platform.CPU,
                    deviceType: Platform.DeviceType,
                    deviceModel: Platform.DeviceModel,
                    deviceVendor: Platform.DeviceVendor,
                    ua: Platform.UA,
                    ipaddress: netDetails.ip,
                    city: netDetails.city,
                    region: netDetails.region,
                    country: netDetails.country,
                    loc: netDetails.loc,
                    org: netDetails.org,
                    poltal: netDetails.poltal,
                    timezone: netDetails.timezone,
                    dateTime: dateTime,
                    date: date,
                })
                    .then(res => {
                    })
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUserForGoolge(user.email, user.displayName, user.photoURL, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
                axios.post(`https://aqueous-ridge-88057.herokuapp.com/userlogs`, {
                    email: user.email, os: Platform.OS, // OS name, Mac OS
                    osVersion: Platform.OSVersion, // OS version, 10.11
                    browser: Platform.Browser, // Browser name, Chrome
                    browserVersion: Platform.BrowserVersion, // Browser Version
                    engine: Platform.Engine, // browser engine name
                    cpu: Platform.CPU,
                    deviceType: Platform.DeviceType,
                    deviceModel: Platform.DeviceModel,
                    deviceVendor: Platform.DeviceVendor,
                    ua: Platform.UA,
                    ipaddress: netDetails.ip,
                    city: netDetails.city,
                    region: netDetails.region,
                    country: netDetails.country,
                    loc: netDetails.loc,
                    org: netDetails.org,
                    poltal: netDetails.poltal,
                    timezone: netDetails.timezone,
                    dateTime: dateTime,
                    date: date,
                })
                    .then(res => {
                    })
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        setIsLoading(true);
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])




    useEffect(() => {
        let isUnmount = false;
        setAdmin(true)
        fetch(`https://aqueous-ridge-88057.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                if (!isUnmount) {
                    setAdmin(data.admin);
                }
            })

        return () => {
            isUnmount = true;
        }
    }, [user.email])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }



    const saveUser = (email, displayName, country, method) => {
        const user = {
            email, displayName, country, os: Platform.OS, // OS name, Mac OS
            osVersion: Platform.OSVersion, // OS version, 10.11
            browser: Platform.Browser, // Browser name, Chrome
            browserVersion: Platform.BrowserVersion, // Browser Version
            engine: Platform.Engine, // browser engine name
            cpu: Platform.CPU,
            deviceType: Platform.DeviceType,
            deviceModel: Platform.DeviceModel,
            deviceVendor: Platform.DeviceVendor,
            ua: Platform.UA,
            ipaddress: netDetails.ip,
            city: netDetails.city,
            region: netDetails.region,
            country: netDetails.country,
            loc: netDetails.loc,
            org: netDetails.org,
            poltal: netDetails.poltal,
            timezone: netDetails.timezone,
            dateTime: dateTime,
            date: date,
            status: 'Active',
            membership: 'Free',
            role: 'General User',
            nidVerification: 'Unverified'
        };
        fetch('https://aqueous-ridge-88057.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    const saveUserForGoolge = (email, displayName, profileImg, method) => {
        const user = {
            email, displayName, profileImg, os: Platform.OS, // OS name, Mac OS
            osVersion: Platform.OSVersion, // OS version, 10.11
            browser: Platform.Browser, // Browser name, Chrome
            browserVersion: Platform.BrowserVersion, // Browser Version
            engine: Platform.Engine, // browser engine name
            cpu: Platform.CPU,
            deviceType: Platform.DeviceType,
            deviceModel: Platform.DeviceModel,
            deviceVendor: Platform.DeviceVendor,
            ua: Platform.UA,
            ipaddress: netDetails.ip,
            city: netDetails.city,
            region: netDetails.region,
            country: netDetails.country,
            loc: netDetails.loc,
            org: netDetails.org,
            poltal: netDetails.poltal,
            timezone: netDetails.timezone,
            dateTime: dateTime,
            date: date,
            status: 'Active',
            membership: 'Free',
            role: 'General User',
            nidVerification: 'Unverified'
        };
        fetch('https://aqueous-ridge-88057.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
        currentUser,
        alert,
        verifybysendingemail,
        userfirebase,
        sendPasswordReset,
    }
}

export default useFirebase;