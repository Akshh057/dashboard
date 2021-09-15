import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Storefront,
} from "@material-ui/icons";
import EventIcon from '@material-ui/icons/Event';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dash.</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                DashBoard
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>

            <li className="sidebarListItem">
              <EventIcon className="sidebarIcon" />
              Schedules
            </li>
            <Link to="/user/1">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Settings
              </li>
            </Link>
          </ul>
        </div>

      </div>
    </div>
  );
}
