/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <title>Duno.land</title>
        <meta content="Duno.land" property="og:title" />
        <meta
          content="The javascript community, and I personally, really want to see Deno succeed. This site is not intended to 'dunk' on Deno in any way. It's simply my way of listing what I see as its current shortcomings and what I hope it can improve on."
          property="og:description"
        />
        <meta content="https://duno.land" property="og:url" />
        <meta
          content="https://duno.land/android-chrome-512x512.png"
          property="og:image"
        />
        <meta content="#b31515" data-react-helmet="true" name="theme-color" />
      </Head>
      <props.Component />
    </>
  );
}
