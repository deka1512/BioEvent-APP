<template>

  <q-layout
    view="hHh lpR fFf"
    class="app-layout"
  >


    <!-- Header dynamique -->
    <component
      v-if="currentHeader"
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



const route = useRoute();



const headers = {

  simple: AppHeader,

  full: FullHeader

};



const currentHeader = computed(() => {

  const type = route.meta.header;

  return headers[type] || AppHeader;

});


</script>


<style scoped>

.app-layout {

  background: #F8FAFC;

  min-height: 100vh;

  overflow: hidden;

}



/*
  Compatible mobile :
  - iOS safe area
  - Android
*/

.page-container {

  padding-bottom: env(safe-area-inset-bottom);

}


.page-content {

  min-height: 100%;

  overflow-x: hidden;

}



/*
  Evite les effets desktop
*/

:deep(.q-page) {

  width: 100%;

}


</style>
