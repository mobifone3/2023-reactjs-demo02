import React from "react";
import { Route, Routes } from "react-router";
import Icons from "../views/Icons";
import StandardButtons from "../views/StandardButtons";
import Footer from "../views/common/Footer";
import Header from "../views/common/Header";
import Settings from "../views/common/Settings";
import Sidebar from "../views/common/Sidebar";
import Dashboard from "../views/Dashboard";
import { appRoutes } from "../routes";

export default function AppContent() {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <Header />
      {/* -------------------------------- APP SETTING SECTION BEGIN ------------------------------ */}
      <Settings />
      {/* ------------------------------ APP SETTING SECTION END -------------------------------- */}
      <div className="app-main">
        <Sidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            {/* --------------------------------APP CONNTECT SECTION BEGIN ------------------------------ */}
            <React.Suspense fallback={<div>Not Found</div>}>
              <Routes>
                {appRoutes.map((route, idx) => {
                  if (route?.children?.[0]) {
                    return (
                      <Route key={idx} path={route.to} element={<route.component />}>
                        {route?.children.map((cRoute, cIdx) => {
                          return <Route key={cIdx} path={`${route.to}/${cRoute.to}`} element={<cRoute.component />} />;
                        })}
                      </Route>
                    );
                  }
                  return <Route key={idx} path={route.to} element={<route.component />} />;
                })}
              </Routes>
            </React.Suspense>
            {/* --------------------------------APP CONNTECT SECTION END ------------------------------ */}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
