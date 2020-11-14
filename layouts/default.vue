<template>
  <div class="container">
    <CThemeProvider>
        <CBox font-family="body" as="main">
          <CReset />
          <Navbar />
          <Nuxt />
        </CBox>
    </CThemeProvider>
  </div>
</template>
<script>
import {
  CThemeProvider,
  CReset,
  CBox,
} from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CThemeProvider,
    CReset,
    CBox,
  },
}
</script>
