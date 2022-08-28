/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface EmbedSpotifyProps {
    embed_url: string;
}

export function EmbedSpotify(props: EmbedSpotifyProps) {
    if (props?.embed_url) {
        return (
            <div class={tw`w-full flex justify-center mt-5`}>
                <iframe style="border-radius:12px" src={props.embed_url} width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        );
    }
    return (<div></div>);
}
