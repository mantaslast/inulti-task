<template>
  <fieldset>
    <label
      class="inline-block text-md font-bold text-gray-800 pb-[3.81px] sm:pb-[5px]"
      :class="labelClass"
      :for="name"
      >{{ label }}</label
    >
    <input
      class="w-full h-[40px] sm:h-[45px] rounded-lg px-1 text-gray-500 border-sm border-gray-300"
      :class="inputClass"
      type="text"
      :name="name"
      :placeholder="placeholder"
    />
  </fieldset>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    label: {
      type: String,
      required: true,
      default: "",
    },
    name: {
      type: String,
      required: true,
      default: "",
    },
    inputClass: {
      type: String,
      default: "",
    },
    labelClass: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
