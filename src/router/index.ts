import { defineRouter } from "#q-app";
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory
} from "vue-router";

import routes from "./routes";

export default defineRouter(() => {
  // Choix du mode d'historique selon l'environnement
  const createHistory = import.meta.env.QUASAR_SERVER
    ? createMemoryHistory
    : import.meta.env.QUASAR_VUE_ROUTER_MODE === "history"
      ? createWebHistory
      : createWebHashHistory;

  // Création de l'instance du routeur
  const router = createRouter({
    // Remonte automatiquement en haut de la page lors de chaque navigation
    scrollBehavior: () => ({
      left: 0,
      top: 0
    }),

    // Routes déclarées manuellement
    routes,

    // Historique de navigation
    history: createHistory(import.meta.env.QUASAR_VUE_ROUTER_BASE)
  });

  return router;
});
