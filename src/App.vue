<template lang = 'pug'>
#app
  section.section
    nav.nav.has-shadow
      .container  
        input.input.is-large(
          type="text" 
          placeholder="Busca tu cancion", 
          v-model="searchQuery")
        a.button.is-info.is-medium(@click="search") Buscar
        a.button.is-danger.is-medium &times;
        small {{ searchMessage }}
      
    .container.results
      .column
        .columns(v-for="track in tracks") {{ track.name }} --{{ track.artists[0].name }} --
          span
            a {{ track.artists[0].external_urls.spotify }}
</template>

<script>
import trackService from './services/track'

// const tracks = [
//   { name: 'juliana', artist: 'Joan Sebastian' },
//   { name: 'Acabame de matar', artist: 'Panteon Rocococo' },
//   { name: 'Que pedirás ', artist: 'Masktesta' }
// ]

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
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
      console.log('se')
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
        })
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

.results {
  margin-top: 3%;
}
</style>


