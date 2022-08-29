/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import { graphql } from "@/utils/shopify.ts";
import { Footer } from "@/components/Footer.tsx";
import { HeadElement } from "@/components/HeadElement.tsx";
import { Header } from "@/components/Header.tsx";
import { EmbedYoutube } from "@/components/EmbedYoutube.tsx";
import { List, Product } from "../utils/types.ts";
import { EmbedSoundcloud } from "@/components/EmbedSoundcloud.tsx";
import { EmbedSpotify } from "@/components/EmbedSpotify.tsx";
import { EmbedBandsInTown } from "../components/EmbedBandsInTown.tsx";

export default function Home(ctx: PageProps) {
  const { url, route} = ctx;
  const is_shop = route.includes("/shop")
  return (
    <div class={tw`scroll-smooth`}>
      <HeadElement
        description="Josh Ace - Musician"
        image={url.href + "og-image.jpeg"}
        title="Josh Ace - Musician"
        url={url}
      />
      <Header is_shop={is_shop}/>
      <div
        class={tw`w-11/12 max-w-5xl mx-auto text-center`}
        aria-labelledby="information-heading"
      >
        {/* <div class={tw`h-screen`}>
          <div class={tw`absolute bottom-0 p-3 animate-pulse`}>
            <a href="#content">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </a>
          </div>
        </div> */}
        <h2 id="information-heading" class={tw`sr-only`}>
          Home Page
        </h2>
        <div id="content">
        <EmbedYoutube embed_url="https://www.youtube.com/embed/ZwToZzL_Hk4"/>
        <EmbedSoundcloud embed_url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1295056516&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
        {/* <EmbedSpotify embed_url="https://open.spotify.com/embed/artist/7HQM2Ipw42h125jTyZemVx?utm_source=generator" /> */}
        <EmbedBandsInTown />
        </div>
      </div>
      <Footer />
    </div>
  );
}
