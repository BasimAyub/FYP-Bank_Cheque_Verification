import React, { Component } from "react";
import UserHeader from "../../../components/header/userHeader";
import WelcomeMenu from "../../../components/user/home/upperWelcome";
import UserCardMenu from "../../../components/user/home/userCardMenu";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import IosShareIcon from "@mui/icons-material/IosShare";
import SendIcon from "@mui/icons-material/Send";
import ReportIcon from "@mui/icons-material/Report";
import "./userHome.css";
import UserTemplate from "../userTemplate";

export class User extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoggedIn: localStorage.getItem("userInfo"),
  //   };
  // }

  // componentDidMount() {
  //   this.isLogged();
  // }

  // isLogged() {
  //   if (this.state.isLoggedIn === null) {
  //     window.location.href = "/login";
  //   }
  // }

  render() {
    return (
      <UserTemplate>
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
      </UserTemplate>
    );
  }
}

export default User;
