<template>
  <q-input
    v-model="model"
    class="base-input"
    outlined
    rounded
    :label="label"
    :type="inputType"
    :placeholder="placeholder"
    :autocomplete="autocomplete"
    :disable="disabled"
    :readonly="readonly"
    :error="!!error"
    :error-message="error"
  >
    <!-- Icône gauche -->

    <template #prepend v-if="icon">
      <q-icon :name="icon" />
    </template>

    <!-- Icône droite mot de passe -->

    <template #append v-if="password">
      <q-icon
        :name="showPassword ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="showPassword = !showPassword"
      />
    </template>
  </q-input>
</template>

<script setup>
import { computed, ref } from "vue";

const model = defineModel();

const props = defineProps({
  label: {
    type: String,

    default: ""
  },

  placeholder: {
    type: String,

    default: ""
  },

  icon: {
    type: String,

    default: null
  },

  password: {
    type: Boolean,

    default: false
  },

  autocomplete: {
    type: String,

    default: "off"
  },

  disabled: {
    type: Boolean,

    default: false
  },

  readonly: {
    type: Boolean,

    default: false
  },

  error: {
    type: String,

    default: ""
  }
});

const showPassword = ref(false);

const inputType = computed(() => {
  if (props.password) {
    return showPassword.value ? "text" : "password";
  }

  return "text";
});
</script>

<style scoped lang="scss">
.base-input {
  :deep(.q-field__control) {
    min-height: 56px;
  }

  /*
  Texte saisi
  */

  :deep(.q-field__native),
  :deep(.q-field__input) {
    font-size: 21px;

    line-height: 1.4;
  }

  /*
  Label
  */

  :deep(.q-field__label) {
    font-size: 16px;
  }

  /*
  Icônes
  */

  :deep(.q-icon) {
    font-size: 24px;
  }
}
</style>
