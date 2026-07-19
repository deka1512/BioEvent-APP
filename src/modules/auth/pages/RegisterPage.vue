<template>
  <div class="register-page">
    <AuthCard>
      <!-- Titre -->

      <div class="header">
        <h1> Créer un compte </h1>

        <p> Rejoignez BioEvents et gérez vos événements </p>
      </div>

      <!-- Formulaire -->

      <q-form class="register-form" @submit.prevent="handleRegister">
        <BaseInput
          v-model="firstName"
          label="Prénom"
          icon="person"
          autocomplete="given-name"
        />

        <BaseInput
          v-model="lastName"
          label="Nom"
          icon="person"
          autocomplete="family-name"
        />

        <BaseInput
          v-model="email"
          label="Adresse email"
          icon="email"
          autocomplete="email"
        />

        <BaseInput
          v-model="phone"
          label="Téléphone"
          icon="phone"
          autocomplete="tel"
        />

        <BaseInput
          v-model="password"
          label="Mot de passe"
          icon="lock"
          password
          autocomplete="new-password"
        />

        <BaseInput
          v-model="passwordConfirmation"
          label="Confirmer le mot de passe"
          icon="lock"
          password
          autocomplete="new-password"
        />

        <PrimaryButton
          label="Créer mon compte"
          icon="person_add"
          type="submit"
        />
      </q-form>

      <!-- Retour connexion -->

      <div class="login-link">
        <span> Vous avez déjà un compte ? </span>

        <router-link to="/login"> Se connecter </router-link>
      </div>
    </AuthCard>
  </div>
</template>

<script setup>
import { ref } from "vue";

import AuthCard from "../components/AuthCard.vue";

import BaseInput from "@/components/BaseInput.vue";

import PrimaryButton from "@/components/PrimaryButton.vue";
import { RouterLink } from "vue-router";

const firstName = ref("");

const lastName = ref("");

const email = ref("");

const phone = ref("");

const password = ref("");

const passwordConfirmation = ref("");

function handleRegister() {
  console.log({
    firstName: firstName.value,

    lastName: lastName.value,

    email: email.value,

    phone: phone.value,

    password: password.value,

    passwordConfirmation: passwordConfirmation.value
  });
}
</script>

<style scoped lang="scss">
.register-page {
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

.register-form {
  display: flex;

  flex-direction: column;

  gap: 16px;
}

.login-link {
  margin-top: 24px;

  text-align: center;

  font-size: 15px;
}

a {
  color: #2563eb;

  text-decoration: none;

  font-weight: 600;
}
</style>
