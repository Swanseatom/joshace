/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface EmbedSoundcloudProps {
    embed_url: string;
}

export function EmbedSoundcloud(props: EmbedSoundcloudProps) {
    if (props?.embed_url) {
        return (
            <div class={tw`w-full justify-center mt-5`}>
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={props.embed_url}></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/josh-ace-official" title="Josh Ace" target="_blank" style="color: #cccccc; text-decoration: none;">Josh Ace</a> · <a href="https://soundcloud.com/josh-ace-official/dont-die1" title="Don&#x27;t Die" target="_blank" style="color: #cccccc; text-decoration: none;">Don&#x27;t Die</a></div>
            </div>
        );
    }
    return (
        <div>
        </div>
    );
}
