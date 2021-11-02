import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";

import "../styles/globals.css";

interface MyAppProps {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <div className="font-KoHo">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
