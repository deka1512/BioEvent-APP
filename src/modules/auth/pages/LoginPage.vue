<template>
  <div class="login-page">
    <AuthCard>
      <!-- Titre -->
      <div class="header">
        <h1> Bienvenue sur BioEvents </h1>

        <p> Connectez-vous pour gérer vos événements </p>
      </div>

      <!-- Formulaire -->
      <q-form class="login-form" @submit.prevent="handleLogin">
        <BaseInput
          v-model="email"
          label="Adresse email"
          icon="email"
          autocomplete="email"
        />

        <BaseInput
          v-model="password"
          label="Mot de passe"
          icon="lock"
          password
          autocomplete="current-password"
        />

        <div class="forgot">
          <router-link to="/forgot-password">
            Mot de passe oublié ?
          </router-link>
        </div>

        <PrimaryButton label="Se connecter" type="submit" icon="login" />
      </q-form>

      <div class="register">
        <span> Vous n'avez pas de compte ? </span>

        <router-link to="/register"> Créer un compte </router-link>
      </div>
    </AuthCard>
  </div>
</template>

<script setup>
import { ref } from "vue";

import AuthCard from "../components/AuthCard.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import BaseInput from "@/components/BaseInput.vue";

const email = ref("");

const password = ref("");

const showPassword = ref(false);

function handleLogin() {
  console.log({
    email: email.value,

    password: password.value
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

.login-btn {
  height: 52px;
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
