import React, { Component } from "react";
import UserHeader from "../../components/header/userHeader";
import WelcomeMenu from "../../components/user/home/upperWelcome";
import UserCardMenu from "../../components/user/home/userCardMenu";
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import IosShareIcon from '@mui/icons-material/IosShare';
import SendIcon from '@mui/icons-material/Send';
import ReportIcon from '@mui/icons-material/Report';
import "./userHome.css";

// useEffect(() => {
//   const userInfo = localStorage.getItem("userInfo");
//   if (userInfo) {
//     navigate("/user");
//   }
// }, [navigate]);

export class User extends Component {
  
  render() {
    return (
      <div className="userMain">
        <UserHeader />
        <div className="userMainContent">
          <div className="mainSub">
            <WelcomeMenu />
            <hr className="horizontalRow" />
            <div className="mainMenu">
              <h2 className="menuHeading">Menu</h2>
              <div className="menu">
                <UserCardMenu
                  NavigateTo="/chequeTransaction"
                  iconName={<DocumentScannerIcon sx={{ fontSize: 40 }} />}
                  name="Cheque Transaction"
                />
                <UserCardMenu
                  NavigateTo="/cehqueDeposit"
                  iconName={<IosShareIcon sx={{ fontSize: 40 }} />}
                  name="Cheque Deposit"
                />
                <UserCardMenu
                  NavigateTo="/transferMoney"
                  iconName={<SendIcon sx={{ fontSize: 40 }} />}
                  name="Transfer Money"
                />
                <UserCardMenu
                  NavigateTo="/registerComplain"
                  iconName={<ReportIcon sx={{ fontSize: 40 }} />}
                  name="Register Complain"
                />
              </div>
            </div>
          </div>
        </div>
        <div>footer</div>
      </div>
    );
  }
}

export default User;
