import useSwr from 'swr'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSwr('/api/tvshow', fetcher)

  if (error) return <div>Failed to load tv shows</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>Random Show to binge over the weekend</h1>
      <p>{data.tvshow.name}</p>
      <img src={data.tvshow.image}></img>
      <h5>
        <Link href="/random">
          <a>Nope, Show Something else</a>
        </Link>
      </h5>
    </div>
  )
}