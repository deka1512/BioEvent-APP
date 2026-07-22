import { defineBoot } from "#q-app";

import api from "@/api";

import "@/api/interceptors";


export default defineBoot(({ app }) => {


  app.config.globalProperties.$api = api;


});
