<template>
  <c-box
    mx="auto"
    my="20px"
    :w="['20rem', '20rem', '20rem', '20rem']"
    background="#FFFFFF"
    border="1px solid #DED9D9"
    box-shadow="0px 20px 40px rgba(134, 132, 137, 0.2)"
    border-radius="10px"
  >
    <c-image
      w="100%"
      height="182px"
      src="https://gblobscdn.gitbook.com/assets%2F-LtfsSb-LO7Jji2T46BE%2F-Lu-9EgVBdQIzGQkgsyj%2F-Lu-DqZbYh9VP7P9kvoH%2FTheme%20BG.jpg?alt=media&token=f87e1f3e-ef4f-4661-943a-4a8777a568ea"
    />
    <c-box px="30px" py="15px">
      <c-stack direction="column" spacing="5px">
        <c-text font-weight="500" font-size="12px">
          {{ dateTime }}
        </c-text>
        <c-heading font-weight="700" font-size="18px">
          {{ title }}
        </c-heading>
        <c-text font-weight="500" font-size="10px">
          {{ type }}
        </c-text>
        <c-heading font-weight="700" font-size="14px"> Speakers </c-heading>
      </c-stack>
      <c-stack flexWrap="no-wrap" direction="row" mt="10px">
        <c-avatar name="Evan You" src="https://bit.ly/chakra-evan-you" />
        <c-avatar
          name="Segun Adebayo"
          src="https://bit.ly/chakra-segun-adebayo"
        />
        <c-avatar
          name="Sarah Drasner"
          src="https://bit.ly/chakra-sarah-drasner"
        />
        <c-avatar
          name="Kelvin Omereshone"
          src="https://bit.ly/chakra-kelvin-omereshone"
        />
        <c-avatar name="Mesut Koca" src="https://bit.ly/chakra-mesut-koca" />
      </c-stack>
      <c-divider />
      <c-stack direction="row" mt="10px" justify-content="space-between">
        <c-button variant-color="blue" variant="link"> Event details </c-button>
        <slot name="Register"></slot>
      </c-stack>
    </c-box>
  </c-box>
</template>

<script>
export default {
  props: {
    dateTime: String,
    title: String,
    type: String,
  },
};
</script>