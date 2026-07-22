<template>

  <div class="full-header">

    <!-- En-tête principal -->

    <AppHeader />

    <!-- Extension du header -->

    <div class="header-extension">

      <slot />

    </div>

  </div>

</template>

<script setup>

import AppHeader from "./AppHeader.vue";

</script>

<style scoped lang="scss">

.full-header {

  width: 100%;
  box-shadow: 0 14px 40px rgba(37, 99, 235, .18);

}


/* --------------------------------------------------------------------------
   Extension du header
--------------------------------------------------------------------------- */

.header-extension {

  width: 100%;

  height: 250px;

  background: linear-gradient(
    135deg,
    $primary,
    $secondary
  );

  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;


}

</style>
