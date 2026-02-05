import React from "react";
import Logo from "../../imgs/logo.png";
import "./Sidebar.css";

function Sidebar() {
  return (
    <section className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      {/* menu */}
      <div className="menu">
        <div className="menuItem">
          <div>Icon</div>
          <span>Dashboard</span>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
