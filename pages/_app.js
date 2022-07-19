import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BXTNTE2B3Q"
      />
      <script>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BXTNTE2B3Q');`}
      </script>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
