<template>
    <c-flex bg="#F8F3F3" border="1px solid #DAD3D3" border-radius="15%">
        <c-text font-size="10px" font-weight="500" color="#524c4c" v-for="item in tags" :key="item" >
            {{ item }}
        </c-text>
    </c-flex>
</template>

<script>
export default {
    props: {
        tags: Array
    }
}
</script>