import type { RouteRecordRaw } from "vue-router";


const routes: RouteRecordRaw[] = [

  {
    path: "/organizations",

    component: () =>
      import("layouts/AppLayout.vue"),

    children: [

      {
        path: "",

        name: "organization-list",

        component: () =>
          import("./pages/OrganizationListPage.vue"),

        meta: {

          requiresAuth: true,

          title: "Mes organisations",

          header: "full",

          bottomNav: true

        }

      },


      {
        path: "create",

        name: "organization-create",

        component: () =>
          import("./pages/OrganizationCreatePage.vue"),

        meta: {

          requiresAuth: true,

          title: "Créer une organisation",

          header: "simple",

          backButton: true,

          bottomNav: false

        }

      },


      {
        path: ":id",

        name: "organization-detail",

        component: () =>
          import("./pages/OrganizationDetailPage.vue"),

        meta: {

          requiresAuth: true,

          title: "Organisation",

          header: "full",

          bottomNav: true

        }

      },


      {
        path: ":id/edit",

        name: "organization-edit",

        component: () =>
          import("./pages/OrganizationEditPage.vue"),

        meta: {

          requiresAuth: true,

          title: "Modifier",

          header: "simple",

          backButton: true,

          bottomNav: false

        }

      },


      {
        path: ":id/settings",

        name: "organization-settings",

        component: () =>
          import("./pages/OrganizationSettingsPage.vue"),

        meta: {

          requiresAuth: true,

          title: "Paramètres",

          header: "simple",

          backButton: true,

          bottomNav: false

        }

      }

    ]

  }

];


export default routes;
