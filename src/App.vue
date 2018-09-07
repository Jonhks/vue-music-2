<template lang = 'pug'>
#app
  <!-- jm-header -->
  <!-- jm-notification
  jm-loader(v-show = "isLoader")
  section.section(v-show = "!isLoader")
    nav.nav
      .container  
        input.input.is-large(
          type="text" 
          placeholder="Busca tu cancion", 
          v-model="searchQuery")
        a.button.is-info.is-medium(@click="search") Buscar
        a.button.is-danger.is-medium &times;
        p
          small {{ searchMessage }}
      
    .container.results
      .columns.is-multiline
        .column.is-one-quarter(v-for="track in tracks") 
          jm-track(:class = "{'is-active': track.id === selectedTrack}",  :track = "track", @select = "setSelectedTrack") -->



          <!-- {{ track.name }} --{{ track.artists[0].name }} -- -->
            <!-- a {{ track.artists[0].external_urls.spotify }} -->

  jm-footer

</template>

<script>
import trackService from '@/services/track'
import jmFooter from '@/components/layout/footer.vue'
import jmHeader from '@/components/layout/header.vue'
import jmTrack from '@/components/track.vue'
import jmLoader from '@/components/shared/loader.vue'
import jmNotification from '@/components/shared/notifications.vue'

// const tracks = [
//   { name: 'juliana', artist: 'Joan Sebastian' },
//   { name: 'Acabame de matar', artist: 'Panteon Rocococo' },
//   { name: 'Que pedirás ', artist: 'Masktesta' }
// ]

export default {
  name: 'app',
  components: { jmFooter, jmHeader, jmTrack, jmLoader, jmNotification },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoader: false,
      selectedTrack: ''
    }
  },
  computed: {
    searchMessage () {
      return 'Encontrados ' + this.tracks.length + ' tracks'
    }
  },
  watch: {
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoader = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
          this.isLoader = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
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


