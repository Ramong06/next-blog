import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
  <div className='mx-auto'>
    <nav>
      <ul className='flex'>
        <li className='underline mx-auto text-xl cursor-pointer'><Link href="/"><a>Home</a></Link></li>
        <li className='underline cursor-pointermx-auto text-xl cursor-pointer'><Link href="/about"><a>About</a></Link></li>
        <li className='underline mx-auto text-xl cursor-pointer'><a target="_blank" href="https://www.youtube.com/watch?v=Yq2sfbANtak"  rel="noopener noreferrer">Los Locos</a></li>
      </ul>
    </nav>
    <Component {...pageProps} />
  </div>
  )};

export default MyApp;
