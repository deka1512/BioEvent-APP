<template>
  <div class="reset-page">
    <AuthCard>
      <!-- En-tête -->
      <div class="header">
        <h1> Nouveau mot de passe </h1>

        <p>
          Choisissez un mot de passe sécurisé pour protéger votre compte
          BioEvents.
        </p>
      </div>

      <!-- Formulaire -->

      <q-form class="reset-form" @submit.prevent="handleResetPassword">
        <BaseInput
          v-model="password"
          label="Nouveau mot de passe"
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

        <!-- Force du mot de passe -->

        <div class="password-strength">
          <q-linear-progress
            rounded
            size="8px"
            :value="strength"
            :color="strengthColor"
          />

          <div class="strength-text">
            {{ strengthLabel }}
          </div>
        </div>

        <!-- Erreur -->

        <div
          v-if="passwordConfirmation && !passwordsMatch"
          class="error-message"
        >
          Les mots de passe ne correspondent pas.
        </div>

        <PrimaryButton
          label="Réinitialiser "
          icon="lock_reset"
          type="submit"
          :loading="loading"
          :disabled="!formValid"
        />
      </q-form>

      <!-- Retour -->

      <div class="back-login">
        <router-link to="/login">
          <q-icon name="arrow_back" />

          Retour à la connexion
        </router-link>
      </div>
    </AuthCard>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Notify } from "quasar";
import { useRouter } from "vue-router";

import AuthCard from "../components/AuthCard.vue";
import BaseInput from "@/components/BaseInput.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";

const router = useRouter();

const password = ref("");

const passwordConfirmation = ref("");

const loading = ref(false);

const passwordsMatch = computed(() => {
  return password.value === passwordConfirmation.value;
});

const strength = computed(() => {
  if (password.value.length === 0) return 0;

  if (password.value.length < 6) return 0.25;

  if (password.value.length < 8) return 0.5;

  if (password.value.length < 10) return 0.75;

  return 1;
});

const strengthColor = computed(() => {
  if (strength.value <= 0.25) return "negative";

  if (strength.value <= 0.5) return "warning";

  if (strength.value <= 0.75) return "info";

  return "positive";
});

const strengthLabel = computed(() => {
  if (strength.value <= 0.25) return "Mot de passe faible";

  if (strength.value <= 0.5) return "Mot de passe moyen";

  if (strength.value <= 0.75) return "Bon mot de passe";

  return "Mot de passe sécurisé";
});

const formValid = computed(() => {
  return password.value.length >= 8 && passwordsMatch.value;
});

function handleResetPassword() {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;

    Notify.create({
      type: "positive",

      icon: "verified",

      position: "top",

      message: "Votre mot de passe a été modifié avec succès."
    });

    setTimeout(() => {
      router.push("/auth/login");
    }, 2000);
  }, 1500);
}
</script>

<style scoped lang="scss">
.reset-page {
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

  line-height: 1.6;
}

.reset-form {
  display: flex;

  flex-direction: column;

  gap: 18px;
}

.password-strength {
  display: flex;

  flex-direction: column;

  gap: 8px;
}

.strength-text {
  font-size: 14px;

  color: #64748b;
}

.error-message {
  color: #ef4444;

  font-size: 14px;

  font-weight: 500;
}

.back-login {
  margin-top: 24px;

  text-align: center;
}

.back-login a {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  text-decoration: none;

  color: #2563eb;

  font-weight: 600;
}
</style>
