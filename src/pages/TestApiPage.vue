<template>

  <q-page class="q-pa-md">

    <q-btn
      label="Tester API"
      @click="testApi"
    />

  </q-page>

</template>


<script setup>

import api from "src/api";


const testApi = async () => {


  try {


    const response = await api.get("/");


    console.log(response.data);


  } catch(error) {


    console.error(error);


  }


};


</script>
