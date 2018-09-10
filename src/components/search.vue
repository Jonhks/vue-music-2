<template lang = 'pug'>
main
  jm-notification(v-show = "showNotification")
    p(slot="error") No hay coincidencias, trabajaremos en ello. Prueba una nueva busqueda ;)
  jm-loader(v-show = "isLoader")
  section.section(v-show = "!isLoader")
    nav.nav
      .container
        input.input.is-large(
          type="text"
          placeholder="Busca tu cancion",
          v-model="searchQuery",
          @keyup.enter="search"
          )
        a.button.is-info.is-medium(@click="search") Buscar
        a.button.is-danger.is-medium &times;
        p
          small {{ searchMessage }}

    .container.results
      .columns.is-multiline
        .column.is-one-quarter(v-for="track in tracks")
          jm-track(:class = "{'is-active': track.id === selectedTrack}",  :track = "track", @select = "setSelectedTrack")



          <!-- {{ track.name }} --{{ track.artists[0].name }} -- -->
            <!-- a {{ track.artists[0].external_urls.spotify }} -->


</template>

<script>
import trackService from '@/services/track'
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
  components: { jmTrack, jmLoader, jmNotification },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoader: false,
      selectedTrack: '',
      showNotification: false
    }
  },
  computed: {
    searchMessage () {
      return 'Encontrados ' + this.tracks.length + ' tracks'
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 4500)
      }
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoader = true
      trackService.search(this.searchQuery)
        .then(res => {
          console.log(res)
          this.showNotification = res.tracks.total === 0
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

.results {
  margin-top: 3%;
}

.is-active{
  border: 3px rgb(56, 56, 56) solid;
}

</style>


