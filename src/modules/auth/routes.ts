import type { RouteRecordRaw } from "vue-router";

const authRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("./layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        name: "splash",
        component: () => import("./pages/SplashPage.vue")
      },

      {
        path: "login",
        name: "login",
        component: () => import("./pages/LoginPage.vue")
      },

      {
        path: "register",
        name: "register",
        component: () => import("./pages/RegisterPage.vue")
      },
      {
        path: "forgot-password",
        name: "forgot-password",
        component: () => import("./pages/ForgotPasswordPage.vue")
      },
      {
        path: "reset-password",
        name: "reset-password",
        component: () => import("./pages/ResetPasswordPage.vue")
      },
      {
        path: "first-organization",
        name: "first-organization",
        component: () => import("./pages/FirstOrgPage.vue")
      }
    ]
  }
];

export default authRoutes;
