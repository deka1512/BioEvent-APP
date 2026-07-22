<template>
  <div class="login-page">



      <!-- Titre -->
      <div class="header">

        <h1>
          Bienvenue sur BioEvents
        </h1>

        <p>
          Connectez-vous pour gérer vos événements
        </p>

      </div>









  </div>
</template>



<script setup>

import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";


import PrimaryButton from "@/components/PrimaryButton.vue";

import BaseInput from "@/components/BaseInput.vue";




const router = useRouter();



const email = ref("");

const password = ref("");



/*
|--------------------------------------------------------------------------
| Test connexion API
|--------------------------------------------------------------------------
*/


const runTest = async () => {

  console.log("🚀 Test API lancé");

  try {

    const response = await axios.get(
      "https://bioapi.bydeka.net/"
    );

    console.log("✅ Réponse :", response.data);

  } catch (error) {

    console.error("❌ Erreur :", error);

  }

};



/*
|--------------------------------------------------------------------------
| Login temporaire
|--------------------------------------------------------------------------
*/

function handleLogin() {


  console.log({

    email: email.value,

    password: password.value

  });


  router.push({

    name: "first-organization"

  });


}



</script>



<style scoped lang="scss">

.login-page {

  width: 100%;

}



.header {

  text-align: center;

  margin-bottom: 28px;

}



.header h1 {

  margin: 0;

  font-size: 28px;

  font-weight: 700;

  color: #0f172a;

}



.header p {

  margin-top: 8px;

  color: #64748b;

}



.login-form {

  display: flex;

  flex-direction: column;

  gap: 18px;

}



.forgot {

  text-align: right;

}



.register {

  margin-top: 24px;

  text-align: center;

}



a {

  color: #2563eb;

  text-decoration: none;

  font-weight: 600;

}


</style>
