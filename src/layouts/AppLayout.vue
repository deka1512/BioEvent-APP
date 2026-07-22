<template>

  <q-layout
    view="hHh lpR fFf"
    class="app-layout"
  >


    <!-- Header dynamique -->

    <component
      :is="currentHeader"
    />



    <!-- Zone principale -->

    <q-page-container class="page-container">

      <q-page class="page-content">

        <router-view />

      </q-page>

    </q-page-container>



    <!-- Navigation mobile -->

    <BottomNav />


  </q-layout>

</template>



<script setup>

import { computed } from "vue";

import { useRoute } from "vue-router";



import AppHeader from "@/components/header/AppHeader.vue";

import FullHeader from "@/components/header/FullHeader.vue";

import BottomNav from "@/components/BottomNav.vue";



// Route actuelle

const route = useRoute();



// Liste des headers disponibles

const headers = {

  app: AppHeader,

  full: FullHeader

};



// Header utilisé par la page

const currentHeader = computed(() => {


  const type = route.meta.header || "app";


  return headers[type];


});


</script>



<style scoped>


/*
|--------------------------------------------------------------------------
| Layout mobile
|--------------------------------------------------------------------------
*/

.app-layout {

  background:#F8FAFC;

}



/*
|--------------------------------------------------------------------------
| Protection navigation basse
|--------------------------------------------------------------------------
*/

.page-container {


  padding-bottom:

    calc(

      110px +

      env(safe-area-inset-bottom)

    );


}



/*
|--------------------------------------------------------------------------
| Contenu mobile
|--------------------------------------------------------------------------
*/

.page-content {


  min-height:100%;


  overflow-x:hidden;


}



/*
|--------------------------------------------------------------------------
| Evite comportement desktop
|--------------------------------------------------------------------------
*/

:deep(.q-page) {


  width:100%;


}


</style>
