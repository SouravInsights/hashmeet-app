<template>
  <c-stack 
    :mx="['20px', '40px', '60px', '60px']" 
    :px="['20px', '40px', '120px', '120px']"
    :py="['20px', '20px', '40px', '40px']"
    bg="#1B51F2" 
    border= "1px solid #F2F4F8"
    box-shadow= "0px 20px 40px rgba(103, 102, 105, 0.2)"
    border-radius= "20px" 
    direction="column"
    spacing="6"
  >
     <c-heading
      font-weight="extrabold"
      line-height="1.2"
      :font-size="['2rem', '2.5rem', '3rem']"
      color="white"
       text-align="center"
    >
      Don’t miss out on new opportunities to learn and grow.
    </c-heading>
    <c-text
      font-weight="normal"
      line-height="1.2"
      :font-size="['1.5rem', '1.5rem', '1.5rem']"
      text-align="center"
      color="white"
    >
      We want to enable everyone to come together and share experiences with a wider community. Let’s make an impact together. 
    </c-text>
  </c-stack>
</template>
