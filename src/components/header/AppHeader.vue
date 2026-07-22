<template>

  <q-header class="app-header">

    <q-toolbar class="toolbar">

      <!-- Bouton retour -->

      <q-btn
        v-if="showBack"
        flat
        round
        dense
        icon="arrow_back_ios_new"
        class="header-btn"
        @click="$emit('back')"
      />

      <!-- Espace réservé lorsque le bouton retour est masqué -->

      <div
        v-else
        class="left-space"
      />

      <!-- Logo de l'application -->

      <div class="logo-wrapper">

        <img
          src="@/assets/images/logo.png"
          alt="BioEvents"
          class="logo"
        />

      </div>

      <!-- Avatar utilisateur -->

      <q-btn
        flat
        round
        class="avatar-btn"
      >

        <q-avatar size="46px">

          <img
            src="@/assets/images/logo.png"
            alt="Utilisateur"
          />

        </q-avatar>

        <!-- Menu utilisateur -->

        <q-menu
          anchor="bottom right"
          self="top right"
          :offset="[0,12]"
        >

          <q-list class="menu-list">

            <!-- Informations utilisateur -->

            <q-item class="user-header">

              <q-item-section avatar>

                <q-avatar size="48px">

                  <img
                   src="@/assets/images/logo.png"
                    alt="Utilisateur"
                  />

                </q-avatar>

              </q-item-section>

              <q-item-section>

                <q-item-label class="username">

                  {{ username }}

                </q-item-label>

                <q-item-label caption>

                  Mon compte

                </q-item-label>

              </q-item-section>

            </q-item>

            <q-separator />

            <!-- Notifications -->

            <q-item
              clickable
              v-close-popup
              @click="$emit('notifications')"
            >

              <q-item-section avatar>

                <q-icon name="notifications" />

              </q-item-section>

              <q-item-section>

                Notifications

              </q-item-section>

            </q-item>

            <!-- Préférences -->

            <q-item
              clickable
              v-close-popup
              @click="$emit('preferences')"
            >

              <q-item-section avatar>

                <q-icon name="settings" />

              </q-item-section>

              <q-item-section>

                Préférences

              </q-item-section>

            </q-item>

            <!-- Aide -->

            <q-item
              clickable
              v-close-popup
              @click="$emit('help')"
            >

              <q-item-section avatar>

                <q-icon name="help_outline" />

              </q-item-section>

              <q-item-section>

                Aide

              </q-item-section>

            </q-item>

            <q-separator />

            <!-- Déconnexion -->

            <q-item
              clickable
              v-close-popup
              class="logout"
              @click="$emit('logout')"
            >

              <q-item-section avatar>

                <q-icon name="logout" />

              </q-item-section>

              <q-item-section>

                Déconnexion

              </q-item-section>

            </q-item>

          </q-list>

        </q-menu>

      </q-btn>

    </q-toolbar>

  </q-header>

</template>

<script setup>

defineProps({

  logo: {

    type: String,
    default: "@/assets/images/logo.png"

  },

  avatar: {

    type: String,

    default: "/images/avatar.png"

  },

  username: {

    type: String,

    default: "Utilisateur"

  },

  showBack: {

    type: Boolean,

    default: true

  }

});


defineEmits([

  "back",

  "notifications",

  "preferences",

  "help",

  "logout"

]);

</script>

<style scoped lang="scss">

/* --------------------------------------------------------------------------
   En-tête principal
--------------------------------------------------------------------------- */

.app-header {

  background: linear-gradient(
    135deg,
    $primary,
    $secondary
  );

  border: none;



}


/* --------------------------------------------------------------------------
   Barre d'outils
--------------------------------------------------------------------------- */

.toolbar {

  height: 82px;

  padding: 0 20px;

}


/* --------------------------------------------------------------------------
   Espace réservé lorsque le bouton retour est masqué
--------------------------------------------------------------------------- */

.left-space {

  width: 46px;

}


/* --------------------------------------------------------------------------
   Logo
--------------------------------------------------------------------------- */

.logo-wrapper {

  flex: 1;

  display: flex;

  justify-content: center;

  align-items: center;

}

.logo {

  height: 42px;

  object-fit: contain;

  border-radius: 50%;

}


/* --------------------------------------------------------------------------
   Boutons
--------------------------------------------------------------------------- */

.header-btn {

  width: 44px;
  height: 44px;

  color: white;

}

.avatar-btn {

  padding: 0;

}


/* --------------------------------------------------------------------------
   Avatar
--------------------------------------------------------------------------- */

.avatar-btn :deep(.q-avatar) {

  width: 46px;
  height: 46px;

}


/* --------------------------------------------------------------------------
   Menu utilisateur
--------------------------------------------------------------------------- */

:deep(.q-menu) {

  border-radius: 18px;

  overflow: hidden;

  box-shadow: 0 12px 28px rgba(15, 23, 42, .12);

}

.menu-list {

  min-width: 250px;

  padding: 8px 0;

}


/* --------------------------------------------------------------------------
   En-tête du menu
--------------------------------------------------------------------------- */

.user-header {

  padding: 16px;

}

.username {

  font-size: 15px;

  font-weight: 600;

  color: #0f172a;

}

:deep(.q-item__label--caption) {

  font-size: 13px;

  color: #64748b;

}


/* --------------------------------------------------------------------------
   Éléments du menu
--------------------------------------------------------------------------- */

:deep(.q-item) {

  min-height: 54px;

  font-size: 15px;

  font-weight: 400;

}

:deep(.q-item__section--avatar) {

  min-width: 42px;

}


/* --------------------------------------------------------------------------
   Déconnexion
--------------------------------------------------------------------------- */

.logout {

  color: $negative;

}

</style>
