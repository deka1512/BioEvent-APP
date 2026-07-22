<template>
  <div class="firstorg-page">
    <AuthCard>
      <!-- Titre -->
      <div class="header">
        <h1> Ajouter une organisation </h1>

        <p>
          Entrez les informations de votre organisation.
        </p>
      </div>

      <!-- Formulaire -->
      <q-form class="forgot-form" @submit.prevent="handleForgotPassword">
        <BaseInput
          v-model="email"
          label="Adresse email"
          icon="email"
          autocomplete="email"
        />
        Nom

        <PrimaryButton
          label="Envoyer le lien"
          icon="send"
          type="submit"
          :loading="loading"
        />
      </q-form>

      <!-- Retour -->
      <div class="back-login">
        <router-link to="/login">
          <q-icon name="arrow_back" size="18px" />

          <span> Retour à la connexion </span>
        </router-link>
      </div>
    </AuthCard>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import AuthCard from "../components/AuthCard.vue";
import BaseInput from "@/components/BaseInput.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import { Notify } from "quasar";
const email = ref("");

const loading = ref(false);
const router = useRouter();

function handleForgotPassword() {
  loading.value = true;

  // Simulation réponse API Laravel

  setTimeout(() => {
    loading.value = false;

    Notify.create({
      type: "positive",

      position: "top",

      icon: "mark_email_read",

      message:
        "Un lien de réinitialisation a été envoyé, veuillez vérifier votre boîte de réception et vos spams.",

      timeout: 4000
    });

    // Redirection après affichage du message

    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  }, 1500);
}
</script>

<style scoped lang="scss">
.forgot-page {
  width: 100%;
}

.header {
  text-align: center;

  margin-bottom: 30px;
}

.header h1 {
  margin: 0;

  font-size: 28px;

  font-weight: 700;

  color: #0f172a;
}

.header p {
  margin-top: 10px;

  color: #64748b;

  line-height: 1.6;
}

.forgot-form {
  display: flex;

  flex-direction: column;

  gap: 20px;
}

.back-login {
  margin-top: 28px;

  text-align: center;
}

.back-login a {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  color: #2563eb;

  text-decoration: none;

  font-weight: 600;

  transition: 0.2s;
}

.back-login a:hover {
  opacity: 0.8;
}
</style>
