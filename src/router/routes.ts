// les imports des routes des modules
import authRoutes from "../modules/auth/routes";

/*
import splashRoutes from "src/modules/splash/routes";
import dashboardRoutes from "src/modules/dashboard/routes";
*/
const routes = [
  ...authRoutes,

  {
    path: "/:catchAll(.*)*",
    redirect: "/"
  }
];

export default routes;
