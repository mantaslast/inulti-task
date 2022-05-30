<template>
  <checkout-form></checkout-form>
</template>

<script setup lang="ts">
import Vue from "vue";
import CheckoutForm from "./components/CheckoutForm.vue";
export default Vue.extend({
  name: "App",
  components: { CheckoutForm },
});
</script>

<style></style>
