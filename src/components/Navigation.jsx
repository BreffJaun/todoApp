// I M P O R T:   F I L E S
import logo from "../images/logo.png";

// I M P O R T:   P A C K A G E S
import { NavLink } from "react-router-dom";

// I M P O R T:   F U N C T I O N S

// C O D E

const Navigation = () => {
  return (
    <nav>
      <div className="left">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/todos"
          >
            ToDos
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/dones"
          >
            Dones
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/help"
          >
            Help
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
