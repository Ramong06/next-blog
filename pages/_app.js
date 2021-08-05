import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <div>
    <nav>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
        <li><a target="_blank" href="https://www.youtube.com/watch?v=Yq2sfbANtak"  rel="noopener noreferrer">Los Locos</a></li>
      </ul>
    </nav>
    <Component {...pageProps} />
  </div>
}

export default MyApp;
