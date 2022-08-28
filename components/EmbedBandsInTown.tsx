/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export function EmbedBandsInTown() {
  return (
    <div class={tw`w-full flex justify-center mt-5`}>
      <div class="bandsintown container">
        <div class="row">
          <div class="col-12">
            <div class="bands-in-town-box mx-auto">
              <a
                class="bit-widget-initializer"
                data-artist-name="joshace"
                data-display-local-dates="false"
                data-display-past-dates="true"
                data-auto-style="false"
                data-text-color="#000000"
                data-link-color="#cacaca"
                data-background-color="#FFFFFF"
                data-display-limit="15"
                data-link-text-color="#000000"
                data-display-lineup="false"
                data-display-play-my-city="false"
                data-separator-color="rgba(124,124,124,0.25)"
              >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
