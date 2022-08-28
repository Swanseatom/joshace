/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface EmbedYoutubeProps {
    embed_url: string;
}

export function EmbedYoutube(props: EmbedYoutubeProps) {
    if (props?.embed_url) {
        return (
            <div id="EmbedYoutube"class={tw`w-full flex justify-center mt-1`}>
            <iframe width="560" height="315" src={props.embed_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        );
    }
    return (<div></div>);
}
