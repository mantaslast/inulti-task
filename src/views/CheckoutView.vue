<template>
  <section>
    <checkout-form />
  </section>
</template>

<script>
import Vue from "vue";
import CheckoutForm from "../components/CheckoutForm.vue";

export default Vue.extend({
  name: "CheckoutView",
  components: { CheckoutForm },
});
</script>

<style></style>
