<template>
  <c-box mx="0px" my="30px">
    <c-stack justify="start" align="start" :spacing="['20px','24px','28px','30px']">
      <c-text font-size="16px" font-weight="500" line-height="1" text-transform="uppercase">{{ dateTime }}</c-text>
      <c-heading align="start" :font-size="['30px','45px']" font-weight="extrabold" line-height="1" color="#232020">{{ title }}</c-heading>
      <c-stack direction="row" wrap="wrap">
        <c-tag mb="5px" variant-color="cyan" rounded="full" :size="['sm', 'sm', 'md', 'lg']" v-for="item in tags" :key="item">
          <c-tag-label>
            {{ item }}
          </c-tag-label>
        </c-tag>
      </c-stack>
    </c-stack>
    <c-stack mt="30px" direction="row" spacing="30px">
      <c-button :size="['md', 'md', 'lg', 'lg']" border-radius="25%" bg="#1B51F2" color="#ffffff" box-shadow="0px 20px 40px rgba(139, 142, 149, 0.1)" left-icon="email"  variant="solid">Get Tickets</c-button>
      <c-button :size="['md', 'md', 'lg', 'lg']" border-radius="25%" bg="#ECEDF0" color="#343131" box-shadow="0px 20px 40px rgba(184, 187, 193, 0.1)" left-icon="email"  variant="solid">Add to Calendar</c-button>
    </c-stack>
    <c-stack mt="30px" align="start" spacing="20px">
      <c-heading font-weight="bold" font-size="30px" line-height="1" color="#232020">
        About
      </c-heading>
      <c-text align="left" font-weight="normal" font-size="16px" color= "#232020">
        We are bringing a massive open source movement by our flagship event, Hacktoberfest Extended Bhubaneswar. We do this every year to promote Open Source and onboard our fellow community members to get started contributing to Open Source Projects. 
      </c-text>
    </c-stack>
  </c-box>

</template>

<script>
export default {
  props: {
    dateTime: String,
    title: String,
    tags: Array
  },
};
</script>