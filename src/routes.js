import React from "react";

import Dashboard from "./views/Dashboard";
import FormDemo from "./views/components/QlsvApp/FormDemo";
import DataTable from "./views/components/QlsvApp/DataTable/DataTable";

const StandardButtons = React.lazy(() => import("./views/StandardButtons"));
const Icons = React.lazy(() => import("./views/Icons"));
const TodoApp = React.lazy(() => import("./views/TodoApp"));
const QlsvApp = React.lazy(() => import("./views/QlsvApp"));

export const appRoutes = [
  { to: "/", display: "DashBoard", component: Dashboard },
  { to: "/icons", display: "Menu Icons", component: Icons },
  { to: "/standard-button", display: "Menu Button", component: StandardButtons },
  { to: "/todo-app", display: "App Todo", component: TodoApp },
  { to: "/qlsv-app/*", display: "App QLSV", component: QlsvApp  },
];
