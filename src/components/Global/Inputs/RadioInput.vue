<template>
  <div>
    <label
      class="inline-block text-md font-bold text-gray-800 pb-[3.81px] sm:pb-[5px]"
      :class="labelClass"
    >{{ label }}</label>
    <div class="flex">
      <template v-for="(option, key) in options">
        <label
          :key="key"
          class="input--radio h-[40px] sm:h-[45px] flex flex-1 basis-1/2 items-center justify-center py-[8px] border border-solid border-[#D8D6D6] rounded-md text-md text-[#2F2F30]"
          :class="{
            active: selected === option.value,
            'mr-[4.5px] sm:mr-[11px]': key === 0,
          }"
        >
          <input
            class="mr-[9px] -translate-x-[13px]"
            type="radio"
            v-model="selected"
            :value="option.value"
            @change="updateValue($event)"
          >
          <span class="-translate-x-[13px]">{{ option.label }}</span>
        </label>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioInput",
  model: {
    event: 'change',
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => [],
      required: true,
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
  },
  data() {
    return {
      selected: "",
    };
  },
  /**
   * Watch in case selected value is changed programatically by the parent component
   */
  watch: {
    value: {
      handler(newVal) {
        this.selected = newVal
      },
      immediate: true,
    }
  },
  methods: {
    updateValue(e) {
      this.selected = e.target.value
      this.$emit('change', e.target.value)
    }
  }
};
</script>

<style></style>
