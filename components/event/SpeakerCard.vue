<template>
    <c-stack mr="30px" mb="30px" w="160px" p="20px" bg="#F5F8FE" border="1px solid #EBE2E2" border-radius="6px" direction="column" align="center" spacing="10px">
        <c-image width="70px" height="70px" border-radius="50%" :src="src" />
        <c-heading font-size="16px" font-weight="bold" line-height="1" color="#232020">{{ name }}</c-heading>
        <c-button w="88px" h="24px" border-radius="4px" bg="#ffffff" color="#5F5959" border="1px solid #E1D8D8" font-size="10px" font-weight="500" outline="none " variant="solid">View Profile</c-button>
    </c-stack>
</template>

<script>
export default {
    props: {
        src: String,
        name: String
    }
}
</script>