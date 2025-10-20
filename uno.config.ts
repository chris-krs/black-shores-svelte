import {
  defineConfig,
  presetWind4,
  transformerVariantGroup,
  transformerDirectives,
  presetIcons,
  presetAttributify,
} from "unocss";
import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders";

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
    presetAttributify(),
    presetIcons({
      collections: {
        iuno: FileSystemIconLoader("./src/lib/assets/icons", (svg) => {
          return svg.replace(/#fff/, "currentColor");
        }),
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  rules: [
    /**
     * column flex rule
     */
    ["flx-col", { display: "flex", "flex-direction": "column" }],
  ],
  postprocess: (util) => {
    /**
     * normalize the icon's css style.
     * 1. center
     * 2. change the size to 1rem
     */
    if (util.selector && util.selector.startsWith(".i-")) {
      util.entries.push(["display", "flex"]);
      util.entries.push(["justify-content", "center"]);
      util.entries.push(["align-items", "center"]);
      const width = util.entries.find((item) => item[0] === "width");
      const height = util.entries.find((item) => item[0] === "height");
      if (width && height) {
        width[1] = "1rem";
        height[1] = "1rem";
      }
    }
  },
});
