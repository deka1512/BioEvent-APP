<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Splash Screen -->
    <div v-if="loading" class="splash-screen">
      <div class="splash-content">
        <!-- Logo -->
        <img :src="logo" class="logo" alt="BioEvents" />

        <!-- Loader -->
        <q-spinner color="primary" size="45px" class="loader" />
      </div>

      <!-- Crédit -->
      <div class="credit"> BioEvents <span>byDEKA</span> </div>
    </div>

    <!-- Application -->
    <template v-else>
      <q-page-container>
        <router-view />
      </q-page-container>
    </template>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import logo from "/images/logo bio text.png";

const router = useRouter();

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
    router.push({
      name: "login"
    });
  }, 2000);
});
</script>

<style scoped>
.splash-screen {
  position: fixed;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(135deg, #d9ecff, #eeeaff, #c8c0ff);

  z-index: 9999;
}

.splash-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 350px;
  height: auto;

  animation: fadeIn 1.2s ease;
}

.loader {
  margin-top: 35px;

  animation: pulse 1.5s infinite;
}

.credit {
  position: absolute;

  bottom: 35px;

  font-size: 14px;

  letter-spacing: 1px;

  color: #555;
}

.credit span {
  font-weight: 700;

  color: #2463eb;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.15);
  }
}
</style>
