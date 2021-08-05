import Head from 'next/head'
import { blogPosts } from '../../lib/data';


export default function BlogPage({ title, date, content }) {
  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="">{title}</h1>
      </main>
    </div>
  );
};

export async function getStaticProps(context) {  //Add First
    console.log(context);
    return {
        props: {}, // This will be passed to the page component as props
    }
};

export async function getStaticPaths() { // Add Second!
    return {
        // paths key is REQUIRED because it determines which paths will be pre-rendered
        paths: blogPosts.map((item) => ({
            // Each object inside the paths key represents an individual dynamic PAGE.
            // the value for each paramater must match the parameters used in the page name or slug
            params: {
                slug: item.slug,
            },
        })),
        fallback: false,
    };
};