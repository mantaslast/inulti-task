<template>
  <section
    class="max-w-[443px] mx-auto bg-white rounded-lg p-[21px] border-solid border border-white-secondary"
  >
    <h2 class="text-xl font-bold text-black text-center pb-[14px]">
      Get your Car Insurance for $9.99
    </h2>
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
