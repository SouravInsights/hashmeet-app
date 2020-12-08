<template>
  <c-stack font-size="18px" font-weight="500" v-bind="$attrs">
    <c-link :_hover="{ textDecor: 'none' }" href="#"> Home </c-link>
    <c-link :_hover="{ textDecor: 'none' }" href="#"> Events </c-link>
    <c-link :_hover="{ textDecor: 'none' }" href="#"> Blog </c-link>
    <c-link :_hover="{ textDecor: 'none' }" href="#"> Resources </c-link>

    <c-flex ml="auto">
      <c-button
        font-size="18px"
        font-weight="500"
        mr="5"
        :d="['none', 'none', 'inline-flex']"
        variant="link"
        color="inherit"
        @click="signin"
      >
        Sign in
      </c-button>
      <c-button
        font-size="18px"
        font-weight="500"
        mr="5"
        :d="['none', 'none', 'inline-flex']"
        variant="link"
        color="inherit"
        @click="signup"
      >
        Sign up
      </c-button>
    </c-flex>
  </c-stack>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
      signin: Function,
      signup: Function,
  }
};
</script>