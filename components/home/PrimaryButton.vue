<template>
  <c-button v-bind="attrs$">
    <slot />
  </c-button>
</template>

<script>
export default {
  inheritAttrs: false,
  computed: {
    attrs$: (vm) => ({
      variantColor: "blue",
      borderRadius: "22px",
      bg: "#0931C0",
      _hover: { bg: "blue.700" },
      _active: { bg: "blue.700" },
      fontSize: "md",
      fontWeight: "normal",
      ...vm.$attrs,
    }),
  },
};
</script>