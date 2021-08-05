import Head from 'next/head';
import Link from 'next/link';
import { blogPosts } from '../lib/data';


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Ramon's Blog App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="">Welcome to Ramon's Next.JS tutorial!</h1>
      </main>
      <div>
        {blogPosts.map((item) => (
          <div key={item.slug}>
            <div>
              <Link href={`/blog/${item.slug}`}>
                <a>{item.title}</a>
              </Link>
              </div>
            <div>{item.date.toString()}</div>
            <div>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
