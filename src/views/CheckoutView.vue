<template>
  <section
    class="max-w-[443px] mx-auto bg-white rounded-lg border-solid border border-white-secondary p-[21px] sm:px-[57.5px] sm:pt-[29.5px] sm:pb-[39.5px]"
  >
    <div
      v-if="success"
      class="text-cta border border-solid border-cta p-[20px] rounded-md mb-6 text-center"
    >
      Your request has been submitted successfully
    </div>
    <h2
      class="text-xl font-bold text-black text-center pb-[14px] sm:pb-[28.6px]"
    >
      Get your Car Insurance for $9.99
    </h2>
    <checkout-form @success="onSuccess" />
  </section>
</template>

<script>
import Vue from "vue";
import CheckoutForm from "../components/CheckoutForm.vue";

export default Vue.extend({
  name: "CheckoutView",
  components: { CheckoutForm },
  data() {
    return {
      success: false
    }
  },
  methods: {
    onSuccess() {
      this.success = true
    }
  }
});
</script>

<style></style>
