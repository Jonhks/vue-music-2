<template lang = 'pug'>
#app
  jm-header
  router-view
  jm-footer

</template>

<script>

import jmFooter from '@/components/layout/footer.vue'
import jmHeader from '@/components/layout/header.vue'
export default {
  name: 'app',
  components: { jmFooter, jmHeader }
}
</script>

<style lang="scss">
@import './scss/main.scss';

.results {
  margin-top: 3%;
}

.is-active{
  border: 3px rgb(56, 56, 56) solid;
}

</style>


