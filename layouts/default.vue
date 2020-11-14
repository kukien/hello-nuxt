<template>
  <div>
    <default-header></default-header>
    <Nuxt />
    <default-footer></default-footer>
  </div>
</template>

<script>
import DefaultFooter from '@/components/Footer/DefaultFooter'
import DefaultHeader from '@/components/Header/DefaultHeader'
export default {
  components: {
    DefaultHeader,
    DefaultFooter,
  },
}
</script>
