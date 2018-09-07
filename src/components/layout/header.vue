<template lang = 'pug'>
  section.hero.is-black
    .hero-head
      header.nav
        .container  
          .nav-left
            .nav-item
              strong jonh Music
          .nav-right.nav-menu
    .hero-body
      .container.has-text-centered  
        h1.title Jonh Music
        h2.subtitle Canciones de moda
        jm-player
</template>

<script>
import jmPlayer from '@/components/player.vue'
export default {
  components: { jmPlayer }
}
</script>


