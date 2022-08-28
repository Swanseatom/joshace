/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Socials from "./Socials.tsx";

export function Footer() {
  return (
    <footer
      class={tw`w-100 max-w-5xl mx-auto mt-24 sm:!mt-28 mb-8 flex flex-wrap items-center justify-evenly p-3 bg-white`}
    >
      <Socials />
        <a class={tw`hover:underline`} href="https://github.com/swanseatom">
          Built by Tom Riley
        </a>
        <span class={tw`text-gray-300 text-sm`}>2022</span>
        <a
          class={tw`flex items-center gap-2 text-gray-700`}
          href="https://fresh.deno.dev"
        >
          Powered by
          <img
            src="/fresh_logo.svg"
            alt="Fresh Logo"
            class={tw`h-7 w-7`}
          />
        </a>
    </footer>
  );
}
