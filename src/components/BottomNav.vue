<template>

  <div class="bottom-nav">


    <!-- Barre de navigation flottante -->

    <div class="nav-container">


      <!-- Navigation gauche -->

      <div
        v-for="item in leftItems"
        :key="item.route"
        class="nav-item"
        :class="{ active: isActive(item.route) }"
        @click="navigate(item.route)"
      >

        <q-icon :name="item.icon" />

        <span>
          {{ item.label }}
        </span>

      </div>



      <!-- Bouton central création -->

      <div class="center-action">

        <q-btn

          round

          unelevated

          icon="add"

          class="fab-btn"

          @click="createEvent"

        />

      </div>



      <!-- Navigation droite -->

      <div
        v-for="item in rightItems"
        :key="item.route"
        class="nav-item"
        :class="{ active: isActive(item.route) }"
        @click="navigate(item.route)"
      >

        <q-icon :name="item.icon" />

        <span>
          {{ item.label }}
        </span>

      </div>


    </div>


  </div>

</template>



<script setup>

import { useRouter, useRoute } from "vue-router";



// Gestion navigation

const router = useRouter();

const route = useRoute();



// Navigation gauche

const leftItems = [

  {

    label: "Accueil",

    icon: "home",

    route: "/"

  },


  {

    label: "Feed",

    icon: "dynamic_feed",

    route: "/feed"

  }

];



// Navigation droite

const rightItems = [

  {

    label: "Billets",

    icon: "confirmation_number",

    route: "/tickets"

  },


  {

    label: "Notifications",

    icon: "notifications",

    route: "/notifications"

  }

];



// Navigation vers une page

function navigate(path) {

  router.push(path);

}



// Création rapide

function createEvent() {

  router.push("/events/create");

}



// Détection page active

function isActive(path) {

  return route.path.startsWith(path);

}


</script>



<style scoped lang="scss">


/*
|--------------------------------------------------------------------------
| Conteneur global navigation mobile
|--------------------------------------------------------------------------
*/

.bottom-nav {


  position: fixed;


  left: 0;


  right: 0;



  bottom:

    calc(

      20px +

      env(safe-area-inset-bottom)

    );



  display:flex;



  justify-content:center;



  padding-top:20px;



  z-index:99999;


}



/*
|--------------------------------------------------------------------------
| Barre flottante principale
|--------------------------------------------------------------------------
*/

.nav-container {


  width:

    calc(100% - 32px);



  max-width:460px;



  height:76px;



  background:

    rgba(255,255,255,.96);



  backdrop-filter:

    blur(20px);



  border-radius:40px;



  display:flex;



  align-items:center;



  justify-content:space-around;



  position:relative;



  box-shadow:


    0 -8px 20px rgba(15,23,42,.06),


    0 15px 40px rgba(15,23,42,.18);


}



/*
|--------------------------------------------------------------------------
| Élément navigation
|--------------------------------------------------------------------------
*/

.nav-item {


  flex:1;



  height:100%;



  display:flex;



  flex-direction:column;



  align-items:center;



  justify-content:center;



  gap:4px;



  color:#94A3B8;



  cursor:pointer;



  transition:.25s;


}



.nav-item .q-icon {


  font-size:24px;



  transition:.25s;


}



.nav-item span {


  font-size:11px;



  font-weight:500;


}



/*
|--------------------------------------------------------------------------
| Etat actif
|--------------------------------------------------------------------------
*/

.nav-item.active {


  color:$primary;


}



.nav-item.active .q-icon {


  transform:


    translateY(-3px)


    scale(1.12);


}



/*
|--------------------------------------------------------------------------
| Bouton central
|--------------------------------------------------------------------------
*/

.center-action {


  width:70px;



  height:76px;



  display:flex;



  align-items:center;



  justify-content:center;


}



/*
|--------------------------------------------------------------------------
| Bouton création événement
|--------------------------------------------------------------------------
*/

.fab-btn {


  width:66px;



  height:66px;



  margin-top:-34px;



  background:


    linear-gradient(

      135deg,

      $primary,

      $secondary

    );



  color:white;



  box-shadow:


    0 14px 35px rgba(37,99,235,.45);



  transition:.25s;


}



.fab-btn:active {


  transform:scale(.94);


}


</style>
