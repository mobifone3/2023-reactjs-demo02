import Icons from "../views/Icons";
import StandardButtons from "../views/StandardButtons";
import Footer from "../views/common/Footer";
import Header from "../views/common/Header";
import Settings from "../views/common/Settings";
import Sidebar from "../views/common/Sidebar";

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
            <StandardButtons />
            <Icons />
            {/* --------------------------------APP CONNTECT SECTION END ------------------------------ */}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
