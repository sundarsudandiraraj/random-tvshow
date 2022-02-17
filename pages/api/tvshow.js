export default async function handler(req, res) {
  const tvshow = await getStaticProps()

  res.status(200).json({ tvshow })
  
}

async function getStaticProps() {
  const res = await fetch('https://api.tvmaze.com/shows/'+ Math.floor( Math.random() * 240 ) + 1)
  const json = await res.json()

  return {
      name: json.name,
      image: json.image.medium
  }
}
