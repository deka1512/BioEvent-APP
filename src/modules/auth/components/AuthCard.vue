<template>
  <q-card flat class="auth-card">
    <!-- Logo -->
    <div class="logo-wrapper">
      <div class="logo-circle">
        <img :src="logo" class="logo" alt="BioEvents" />
      </div>
    </div>

    <!-- Contenu -->
    <div class="card-content">
      <slot />
    </div>
  </q-card>
</template>

<script setup>
import logo from "/images/logo bio text.png";
</script>

<style scoped lang="scss">
.auth-card {
  position: relative;

  width: 100%;
  max-width: 460px;

  background: #fff;

  border-radius: 28px;

  padding-top: 90px;

  overflow: visible;

  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
}

/* ==========================================
   Logo
========================================== */

.logo-wrapper {
  position: absolute;

  top: 0;
  left: 50%;

  transform: translate(-50%, -50%);

  z-index: 10;
}

.logo-circle {
  width: 150px;
  height: 150px;

  border-radius: 50%;

  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 6px solid #fff;

  box-shadow: 0 15px 40px rgba(37, 99, 235, 0.18);
}

.logo {
  width: 105px;
  height: auto;

  display: block;

  object-fit: contain;
}

/* ==========================================
   Contenu
========================================== */

.card-content {
  max-height: calc(100dvh - 220px);

  overflow-y: auto;

  padding: 24px;
}

/* ==========================================
   Mobile
========================================== */

@media (max-width: 600px) {
  .auth-card {
    max-width: 100%;

    border-radius: 24px;

    padding-top: 80px;
  }

  .logo-circle {
    width: 130px;
    height: 130px;
  }

  .logo {
    width: 90px;
  }

  .card-content {
    padding: 20px;
  }
}
</style>
