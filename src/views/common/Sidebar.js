import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "../../routes";

export default function Sidebar() {
  return (
    <div className="app-sidebar sidebar-shadow">
      <div className="app-header__logo">
        <div className="logo-src" />
        <div className="header__pane ml-auto">
          <div>
            <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="app-header__mobile-menu">
        <div>
          <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
      </div>
      <div className="app-header__menu">
        <span>
          <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
            <span className="btn-icon-wrapper">
              <i className="fa fa-ellipsis-v fa-w-6" />
            </span>
          </button>
        </span>
      </div>{" "}
      <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            {/* ------------------------------ MAIN SIDE BAR SECTION BEGIN -------------------------------- */}
            <li className="app-sidebar__heading">UI Components</li>
            <li>
              <a>
                <i className="metismenu-icon pe-7s-diamond" />
                Giao Diện
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </a>
              <ul>
                {appRoutes?.[0]
                  ? appRoutes.map((link) => {
                      return (
                        <li>
                          <Link to={link?.to}>
                            <i className="metismenu-icon" />
                            {link?.display}
                          </Link>
                        </li>
                      );
                    })
                  : null}
                {/* <li>
                  <Link to="/icons">
                    <i className="metismenu-icon" />
                    Icons
                  </Link>
                </li> */}
              </ul>
            </li>
            {/* ------------------------------ MAIN SIDE BAR SECTION END -------------------------------- */}
            <li>
              <a href="tables-regular.html">
                <i className="metismenu-icon pe-7s-display2" />
                Tables
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
