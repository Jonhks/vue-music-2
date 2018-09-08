import search from '@/components/search.vue'
import about from '@/components/about.vue'
import trackDetail from '@/components/trackDetail.vue'

const routes = [
  { path: '/', component: search, name: 'search' },
  { path: '/about', component: about, name: 'about' },
  { path: '/track/:id', component: trackDetail, name: 'track' }

]

export default routes
