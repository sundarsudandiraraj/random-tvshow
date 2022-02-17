import Link from 'next/link'

function PreactStars({ name, image }) {
  return (
    <div>
      <h1>Random Show to binge over the weekend</h1>
      <p>{name}</p>
      <img src={image}></img>
      <h5>
        <Link href="/random">
          <a>Nope, Show Something else</a>
        </Link>
      </h5>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.tvmaze.com/shows/'+ Math.floor( Math.random() * 240 ) + 1)
  const json = await res.json()

  return {
    props: {
      name: json.name,
      image: json.image.medium
    },
  }
}

export default PreactStars