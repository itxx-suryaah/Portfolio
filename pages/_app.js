import "@/styles/globals.css";
import '../styles/Home.module.css'; // Ensure the CSS file is imported

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
