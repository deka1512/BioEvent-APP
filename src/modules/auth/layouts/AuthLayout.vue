<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="auth-page">
      <!-- Fond décoratif -->
      <div class="auth-gradient"></div>

      <!-- Contenu -->
      <main class="auth-container">
        <section class="auth-content">
          <router-view />
        </section>
      </main>
    </q-page-container>
  </q-layout>
</template>

<script setup></script>

<style scoped lang="scss">
/* ==========================================================================
   Page
   ========================================================================== */

.auth-page {
  position: relative;
  min-height: 100dvh;
  overflow: hidden;

  background: linear-gradient(180deg, #f8fbff 0%, #ffffff 45%, #fcfcff 100%);
}

/* ==========================================================================
   Fond BioEvents
   ========================================================================== */

.auth-gradient {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background:
    radial-gradient(circle at 10% 15%, rgba(37, 99, 235, 0.3), transparent 45%),
    radial-gradient(
      circle at 90% 20%,
      rgba(124, 58, 237, 0.28),
      transparent 45%
    ),
    radial-gradient(
      circle at 50% 90%,
      rgba(236, 72, 153, 0.18),
      transparent 50%
    ),
    radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.75),
      transparent 60%
    );

  filter: blur(22px);
  transform: scale(1.08);
}

/* ==========================================================================
   Conteneur principal
   ========================================================================== */

.auth-container {
  position: relative;
  z-index: 1;

  min-height: 100dvh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: max(24px, env(safe-area-inset-top)) 24px
    max(24px, env(safe-area-inset-bottom));
}

/* ==========================================================================
   Zone du contenu
   ========================================================================== */

.auth-content {
  width: 100%;
  max-width: 460px;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* ==========================================================================
   Mobile
   ========================================================================== */

@media (max-width: 600px) {
  .auth-container {
    padding: max(20px, env(safe-area-inset-top)) 16px
      max(20px, env(safe-area-inset-bottom));
  }

  .auth-content {
    max-width: 100%;
  }
}
</style>
