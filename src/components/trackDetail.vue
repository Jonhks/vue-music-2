<template lang='pug'>
.container
  .columns
    .column.is-5.is-offset-4
      jm-track(:track ="track")
</template>

<script>

import trackService from '@/services/track'
import jmTrack from '@/components/track.vue'

export default {
  components: { jmTrack },
  data () {
    return {
      track: {}
    }
  },
  created () {
    const id = this.$route.params.id
    trackService.getById(id)
      .then(res => {
        this.track = res
      })
  }
}
</script>

<style lang="sass" scoped>
.columns
  margin:  20px
</style>
