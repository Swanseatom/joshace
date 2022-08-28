/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Socials() {
    const socialClass = tw`h-7`;
  return (
    <div
    class={tw`h-12 flex items-center justify-center relative`}
    >
      <a
        class={tw`mx-3`} 
        href="https://www.facebook.com/joshacemusic/">
        <img class={socialClass} src="/socials/facebook.svg" alt="facebook icon" />
      </a>
      <a
        class={tw`mx-3`}
        href="https://twitter.com/JoshAceOfficial">
        <img class={socialClass} src="/socials/twitter.svg" alt="facebook icon" />
      </a>
      <a
        class={tw`mx-3`}
        href="https://soundcloud.com/josh-ace-official">
        <img class={socialClass} src="/socials/soundcloud.svg" alt="facebook icon" />
      </a>
      <a
        class={tw`mx-3`}
        href="https://www.instagram.com/joshaceofficial/">
        <img class={socialClass} src="/socials/instagram.svg" alt="facebook icon" />
      </a>
      <a
        class={tw`mx-3`}
        href="https://www.youtube.com/channel/UCQszkLEFHSXuUe0kr2mpCMQ">
          <img class={socialClass} src="/socials/youtube.svg" alt="facebook icon" />
      </a>
      {/* <a
        class={tw`mx-3`}
        href="mailto:joshace20@hotmail.com">
        Email
      </a> */}
    </div>
  );
}
