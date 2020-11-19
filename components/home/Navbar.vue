<template>
  <c-box as="nav" bg="white" mt="25px" w="90%" mx="auto" shadow="lg" border= "1px solid #F2F4F8"
boxShadow= "0px 20px 40px rgba(139, 142, 149, 0.05)"
borderRadius= "20px" z-index="1">
    <c-flex p="5" max-w="80rem" mx="auto" align="center">
      <c-box
        align="center"
        mr="auto"
        width="100%"
        ml="5"
        :d="['none', 'none', 'flex']"
      >
        <navbar-content
          w="full"
          align="center"
          spacing="6"
          is-inline
        />
      </c-box>
      <mobile-navbar ml="auto" :d="['flex', 'flex', 'none']" />
    </c-flex>
  </c-box>
</template>