import React from "react";
import "./topbar.css";
import { NotificationsNone } from "@material-ui/icons";
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';
import { Button } from "@material-ui/core";
export default function Topbar() {
  const [dispatch] = useStateValue();
  const logout = () => {
    dispatch({
      type: actionTypes.LOGOUT_USER,
      user: null,
    });
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">DashBoard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Button variant="outlined" onClick={logout}>Logout</Button>
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
