import Link from 'next/link';

export default function IndexPage() {
  return (
    <div>
      <p>Home</p>
      <Link href="/movies">
        <a>Movies</a>
      </Link>
    </div>
  );
}
