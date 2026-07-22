// Configuration principale de l'application BioEvents
// Documentation : https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from "#q-app";

export default defineConfig(ctx => {
  return {
    /*
    |--------------------------------------------------------------------------
    | Fichiers de démarrage (Boot)
    |--------------------------------------------------------------------------
    */
    boot: ["i18n", "axios"],

    /*
    |--------------------------------------------------------------------------
    | Feuilles de style globales
    |--------------------------------------------------------------------------
    */
    css: ["app.scss"],

    /*
    |--------------------------------------------------------------------------
    | Polices et icônes Quasar
    |--------------------------------------------------------------------------
    */
    extras: ["roboto-font", "material-icons", "material-symbols-rounded"],

    /*
    |--------------------------------------------------------------------------
    | Configuration de compilation
    |--------------------------------------------------------------------------
    */
    build: {
      // Versions JavaScript cibles
      target: {
        browser: "es2022",
        node: "node22"
      },

      // Configuration TypeScript
      typescript: {
        strict: true,
        vueShim: true
      },

      // Désactive le routage automatique basé sur les fichiers.
      // Le projet utilisera un routage manuel modulaire.
      filenameBasedRouting: false,

      // Mode de navigation
      // hash    -> recommandé pour Capacitor et hébergement simple
      // history -> nécessite une configuration du serveur
      vueRouterMode: "hash",

      // Plugins Vite
      vitePlugins: [
        [
          "@intlify/unplugin-vue-i18n/vite",
          {
            ssr: ctx.modeName === "ssr",

            include: [ctx.appPaths.resolve.app("src/i18n")]
          }
        ]
      ]
    },

    /*
    |--------------------------------------------------------------------------
    | Serveur de développement
    |--------------------------------------------------------------------------
    */
   devServer: {

      open :true,
    },

    /*
    |--------------------------------------------------------------------------
    | Configuration du Framework Quasar
    |--------------------------------------------------------------------------
    */
    framework: {
      config: {
        // Palette officielle BioEvents
        brand: {
          primary: "#2563EB",
          secondary: "#7C3AED",
          accent: "#EC4899",

          dark: "#0F172A",

          positive: "#22C55E",
          negative: "#EF4444",
          warning: "#F59E0B",
          info: "#3B82F6"
        }
      },

      // Plugins Quasar disponibles dans toute l'application
      plugins: ["Notify", "Dialog", "Loading", "LocalStorage"]
    },

    /*
    |--------------------------------------------------------------------------
    | Animations
    |--------------------------------------------------------------------------
    */
    animations: [],

    /*
    |--------------------------------------------------------------------------
    | Capacitor (Android / iOS)
    |--------------------------------------------------------------------------
    */
    capacitor: {
      // Le Splash Screen sera géré par BioEvents
      hideSplashscreen: true
    },

    /*
    |--------------------------------------------------------------------------
    | Progressive Web App
    |--------------------------------------------------------------------------
    */
    pwa: {
      workboxMode: "GenerateSW"
    },

    /*
    |--------------------------------------------------------------------------
    | Server Side Rendering
    |--------------------------------------------------------------------------
    */
    ssr: {
      prodPort: 3000,

      middlewares: ["render"],

      pwa: false
    },

    /*
    |--------------------------------------------------------------------------
    | Electron
    |--------------------------------------------------------------------------
    */
    electron: {
      preloadScripts: ["electron-preload"],

      inspectPort: 5858,

      bundler: "packager",

      builder: {
        appId: "bioevents"
      }
    },

    /*
    |--------------------------------------------------------------------------
    | Cordova
    |--------------------------------------------------------------------------
    */
    cordova: {},

    /*
    |--------------------------------------------------------------------------
    | Browser Extension
    |--------------------------------------------------------------------------
    */
    bex: {
      extraScripts: []
    }
  };
});
