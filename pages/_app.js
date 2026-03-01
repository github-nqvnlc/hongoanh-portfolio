import Preloader from "@/src/components/Preloader";
import "@/styles/globals.css";
import { Fragment, useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const response = await fetch("/api/theme");
        const data = await response.json();
        const theme = data?.theme || {};

        Object.entries(theme).forEach(([key, value]) => {
          document.documentElement.style.setProperty(key, value);
        });
      } catch (error) {
        // ignore theme load errors and keep default css variables
      }
    };

    loadTheme();
  }, []);

  return (
    <Fragment>
      {loader && <Preloader />}
      <Component {...pageProps} />
    </Fragment>
  );
}
