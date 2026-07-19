<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="auth-page">
        <div class="auth-gradient"></div>

        <div class="auth-content">
          <router-view />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup></script>

<style scoped lang="scss">
.auth-page {
  min-height: 100vh;

  background: #ffffff;

  position: relative;

  overflow: hidden;
}

/*
 Gradient supérieur BioEvents
*/

.auth-gradient {
  position: absolute;

  top: 0;

  left: 0;

  width: 100%;

  height: 45%;

  background:
    radial-gradient(
      circle at top left,
      rgba(37, 99, 235, 0.35),
      transparent 55%
    ),
    radial-gradient(
      circle at top right,
      rgba(124, 58, 237, 0.35),
      transparent 55%
    );

  filter: blur(45px);

  z-index: 0;
}

/*
 Contenu auth
*/

.auth-content {
  position: relative;

  z-index: 1;

  min-height: 100vh;

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  padding: 24px;
}
</style>
