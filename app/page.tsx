import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main>
        <Link href={`/datacenters`}>Datacenters link</Link>
      </main>
    </div>
  );
}
