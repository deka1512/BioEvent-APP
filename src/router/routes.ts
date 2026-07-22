// les imports des routes des modules
import FullHeader from "@/components/header/FullHeader.vue";
import authRoutes from "../modules/auth/routes";

/*
import splashRoutes from "src/modules/splash/routes";
import dashboardRoutes from "src/modules/dashboard/routes";
*/
const routes = [
  ...authRoutes,
{
  path: "/dashboard",
  component: () => import("@/layouts/AppLayout.vue"),
  children: [

    {
      path: "",

      name: "dashboard",

      meta: {

        header: "full"

      },

      component: () => import("@/pages/dashboard/dashboardPage.vue")

    }

  ]

},

  {
    path: "/:catchAll(.*)*",
    redirect: "/"
  }
];

export default routes;
