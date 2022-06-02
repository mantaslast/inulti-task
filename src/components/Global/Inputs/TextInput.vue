<template>
  <fieldset :class="{ error: errors.length }">
    <label
      class="inline-block text-md font-bold text-gray-800 pb-[3.81px] sm:pb-[5px]"
      :class="labelClass"
      :for="name"
      >{{ label }}</label
    >
    <input
      ref="inputEl"
      class="input w-full h-[40px] sm:h-[45px] rounded-lg px-1 text-gray-500 border-sm border-gray-300"
      :class="inputClass"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      @input="updateValue($event)"
      @keyup="updateValue($event)"
      v-bind="$attrs"
      v-cleave="cleaveOptions"
    />
    <div class="errors__list flex flex-col">
      <template v-for="(error, key) in errors">
        <span :key="key" class="text-xs text-error">{{ error.$message }}</span>
      </template>
    </div>
  </fieldset>
</template>

<script lang="ts">
import cleave from "../../../plugins/directives/cleave-directive";
export default {
  name: "TextInput",
  directives: { cleave },
  props: {
    value: {
      type: String,
      default: "",
    },
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
    formatOptions: {
      type: Object,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {
        return {};
      },
    },
    errors: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  computed: {
    cleaveOptions(): Record<string, any> {
      return {
        ...this.formatOptions,
        value: this.value
      }
    }
  },
  methods: {
    updateValue(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style></style>
