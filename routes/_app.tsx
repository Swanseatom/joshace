/** @jsx h */
/** @jsxFrag Fragment */
import { tw } from "@twind";
import { Fragment, h } from "preact";
import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/app.css" />
        <script type='text/javascript' src='/bandsintown.min.js'></script>
      </Head>
      <div
      class={tw`h-100 w-full bg-cover bg-no-repeat bg-fixed`}
      style={{
        backgroundImage: "url(/hero.jpeg)",
      }}>
      <Component />
      </div>
    </>
  );
}
