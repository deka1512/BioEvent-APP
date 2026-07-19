<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  router.replace("..modules/pages/auth/splash");
});
</script>

<template>
  <q-page />
</template>
