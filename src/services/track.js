import musicServise from './jonh-music'

const trackServise = {}

trackServise.search = (q) => {
  const type = 'track'
  return musicServise.get('/search', {
    params: { q, type }
  })
    .then(res => res.data)
}

export default trackServise
