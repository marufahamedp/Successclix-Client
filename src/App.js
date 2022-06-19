import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Navigate, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Authentication/Login/Login';
import Registration from './Pages/Authentication/Registration/Registration';
import PageNotFound from './Pages/PageNotFound/PageNotFound/PageNotFound';
import UserHome from './Pages/UserInterface/UserHome/UserHome/UserHome';
import UserDashboardHome from './Pages/UserInterface/UserDashboard/UserDashboardHome/UserDashboardHome';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Profile from './Pages/UserInterface/Profile/Profile/Profile';
import useAuth from './hooks/useAuth';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import PaindToClick from './Pages/Dashboard/UsersOptions/EarnMoney/PaindToClick/PaindToClick';
import VideoAds from './Pages/Dashboard/UsersOptions/EarnMoney/VideoAds/VideoAds';
import OfferWall from './Pages/Dashboard/UsersOptions/EarnMoney/OfferWall/OfferWall';
import ManageAds from './Pages/Dashboard/UsersOptions/Advertiser/ManageAds/ManageAds';
import CreateAds from './Pages/Dashboard/UsersOptions/Advertiser/CreateAds/CreateAds';
import UpgradeAccount from './Pages/Dashboard/UsersOptions/UpgradeAccount/UpgradeAccount';
import AddFunds from './Pages/Dashboard/UsersOptions/AddFunds/AddFunds';
import Withdraw from './Pages/Dashboard/UsersOptions/Withdraw/Withdraw';
import Referral from './Pages/Dashboard/UsersOptions/Referral/Referral';
import OrderHistory from './Pages/Dashboard/UsersOptions/LogsHistory/OrderHistory/OrderHistory';
import WithdrawHistory from './Pages/Dashboard/UsersOptions/LogsHistory/WithdrawHistory/WithdrawHistory';
import DepositHistory from './Pages/Dashboard/UsersOptions/LogsHistory/DepositHistory/DepositHistory';
import LoginHistorys from './Pages/Dashboard/UsersOptions/LogsHistory/LoginHistorys/LoginHistorys';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Users from './Pages/Dashboard/AdminOptions/Users/Users/Users';
import PtsuAdsA from './Pages/Dashboard/AdminOptions/Advertisers/PtsuAdsA/PtsuAdsA';
import VideoAdsA from './Pages/Dashboard/AdminOptions/Advertisers/VideoAdsA/VideoAdsA';
import TextAdsA from './Pages/Dashboard/AdminOptions/Advertisers/TextAdsA/TextAdsA';
import LinkAdsA from './Pages/Dashboard/AdminOptions/Advertisers/LinkAdsA/LinkAdsA';
import BannerAdsA from './Pages/Dashboard/AdminOptions/Advertisers/BannerAdsA/BannerAdsA';
import PtcAdsA from './Pages/Dashboard/AdminOptions/Advertisers/PtcAdsA/PtcAdsA';
import LoginAdsA from './Pages/Dashboard/AdminOptions/Advertisers/LoginAdsA/LoginAdsA';
import Coins4Wall from './Pages/Dashboard/AdminOptions/OfferWallsA/Coins4Wall/Coins4Wall';
import CpxResearch from './Pages/Dashboard/AdminOptions/OfferWallsA/CpxResearch/CpxResearch';
import WanaadsA from './Pages/Dashboard/AdminOptions/OfferWallsA/Wanaads/WanaadsA';

import ManageDeposits from './Pages/Dashboard/AdminOptions/ManageDeposits/ManageDeposits/ManageDeposits';
import ManageWithdrawals from './Pages/Dashboard/AdminOptions/ManageWithdrawals/ManageWithdrawals/ManageWithdrawals';
import ManageSupport from './Pages/Dashboard/AdminOptions/ManageSupport/ManageSupport/ManageSupport';
import MakeAdmin from './Pages/Dashboard/AdminOptions/MakeAdmin/MakeAdmin';
import Foram from './Pages/Foram/Foram/Foram';
import ThisSiteisUnderCons from './Pages/ThisSiteisUnderCons/ThisSiteisUnderCons';
import useUsers from './hooks/useUsers';
import ReferralRoute from './ReferralRoute/ReferralRoute';
import Payment from './Pages/Dashboard/Payment/Payment';
import GetmoneyWhenUpgrade from './Pages/Dashboard/UsersOptions/UpgradeAccount/GetmoneyWhenUpgrade';
import AdminRoute from './AdminRoute/AdminRoute';
import Investorpacage from './Pages/Dashboard/UsersOptions/Investorpacage/Investorpacage';
import Orders from './Pages/Dashboard/AdminOptions/ManageOrders/Orders/Orders';
import EmailUnverifiedRoutr from './EmailUnverifiedRoutr/EmailUnverifiedRoutr';
import SuspendUsersRoute from './SuspendUsersRoute/SuspendUsersRoute';
import ManageAllWithdraws from './Pages/Dashboard/AdminOptions/ManageWithdrawals/ManageAllWithdraws/ManageAllWithdraws';


function App() {
  const {users}= useUsers()
  const [userid, setUserid] = useState()
  return (
    
    <div >
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/myhome" element={<EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr>}>
            </Route>
            <Route path="/mydashboard" element={<EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr>}>
            </Route>
            <Route path="/dashboard" element={<PrivateRoute><EmailUnverifiedRoutr><DashboardHome /></EmailUnverifiedRoutr></PrivateRoute>}>

              <Route path='/dashboard' element={<PrivateRoute><EmailUnverifiedRoutr><Dashboard /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/paidtoclick' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/videoads' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/offerwall' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/manageads' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/createads' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/upgradeaccount' element={<PrivateRoute><EmailUnverifiedRoutr><UpgradeAccount /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/investorpacage' element={<PrivateRoute><EmailUnverifiedRoutr><Investorpacage /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/getmoneyWhenUpgrade/:upgradeID' element={<PrivateRoute><EmailUnverifiedRoutr><GetmoneyWhenUpgrade /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/addfunds' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/withdraw' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/referral' element={<PrivateRoute><EmailUnverifiedRoutr><Referral /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/orderhistory' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/deposithistory' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/withdrawhistory' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/loginhistory' element={<PrivateRoute><EmailUnverifiedRoutr><LoginHistorys /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/payment' element={<PrivateRoute><EmailUnverifiedRoutr><Payment /></EmailUnverifiedRoutr></PrivateRoute>} />

              {/* -------------------------foradmin-------------------------  */}

              <Route path='/dashboard/users' element={<AdminRoute><Users /></AdminRoute>} />
              <Route path='/dashboard/ptcadsa' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/videoadsa' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/textadsa' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/linkadsa' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/banneradsa' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/ptsuadsa' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/loginadsa' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/coins4wall' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/cpxresearch' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/wanaadsa' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/orders' element={<PrivateRoute><EmailUnverifiedRoutr><Orders /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/managedeposits' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/managewithdrawals' element={<PrivateRoute><EmailUnverifiedRoutr><ManageAllWithdraws /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/managesupport' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />
              <Route path='/dashboard/makeadmin' element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>} />


            </Route>
            <Route path="/about" element={<EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr>}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/registration" element={<Registration />}>
            </Route>
           
         
    
            <Route path="/foram" element={<PrivateRoute><EmailUnverifiedRoutr><ThisSiteisUnderCons /></EmailUnverifiedRoutr></PrivateRoute>}>
            </Route>
            <Route path="/myprofile/:profileID" element={<EmailUnverifiedRoutr><Profile /></EmailUnverifiedRoutr>}>
            </Route>
            <Route path='*' element={<PageNotFound />}>
            </Route>


          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
