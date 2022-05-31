<template functional>
  <header
    class="flex items-center justify-center bg-gray-900 h-[50px] min-h-[50px] sm:min-h-[4rem] sm:h-16"
  >
    <router-link :to="{ name: 'home' }">
      <img
        class="w-[144px] hidden sm:block"
        src="../../assets/images/logo.svg"
        alt="Logo"
      >
    </router-link>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
