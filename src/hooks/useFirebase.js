import { useState, useEffect } from 'react';
import { getAuth, sendPasswordResetEmail, sendEmailVerification, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';
import publicIp from 'public-ip';


// initialize firebase app
initializeFirebase();

const useFirebase = () => {


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
                console.log(error);
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
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
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
        let isUnmount =false;
     
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                if(!isUnmount){
                    setAdmin(data.admin);
                  
                }
               
               
            })
            return()=>{
                isUnmount =true;
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
        const user = { email, displayName, country };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    const saveUserForGoolge = (email, displayName, profileImg, method) => {
        const user = { email, displayName, profileImg };
        fetch('http://localhost:5000/users', {
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