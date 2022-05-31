<template>
  <section>
    <router-link
      class="inline-flex items-center justify-center h-[50px] px-10 bg-cta rounded-sm text-white text-lg font-bold"
      :to="{ name: 'checkout' }"
    >
      CHECKOUT
    </router-link>
  </section>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "HomeView",
});
</script>

<style></style>
