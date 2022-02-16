import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      Hello World.{' '}
      <Link href="/random">
        <a>What TV show to watch tonight?</a>
      </Link>
    </div>
  )
}
