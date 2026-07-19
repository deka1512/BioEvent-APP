<template>
  <q-btn
    class="primary-btn"
    :label="label"
    :icon="icon"
    :icon-right="iconRight"
    :loading="loading"
    :disable="disabled"
    :type="type"
    color="primary"
    rounded
    unelevated
    @click="$emit('click')"
  >
    <!-- contenu personnalisé -->
    <slot />
  </q-btn>
</template>

<script setup>
defineProps({
  /*
  Texte du bouton
  */
  label: {
    type: String,

    default: ""
  },

  /*
  Icône avant le texte
  Exemple:
  icon="login"
  */
  icon: {
    type: String,

    default: null
  },

  /*
  Icône après le texte
  Exemple:
  iconRight="arrow_forward"
  */
  iconRight: {
    type: String,

    default: null
  },

  /*
  Animation loading Quasar
  */
  loading: {
    type: Boolean,

    default: false
  },

  /*
  Désactivation
  */
  disabled: {
    type: Boolean,

    default: false
  },

  /*
  Type HTML
  submit | button
  */
  type: {
    type: String,

    default: "button"
  }
});

defineEmits(["click"]);
</script>

<style scoped lang="scss">
.primary-btn {
  width: 100%;

  height: 56px;

  font-size: 20px;

  font-weight: 600;

  letter-spacing: 0.2px;
}
</style>
