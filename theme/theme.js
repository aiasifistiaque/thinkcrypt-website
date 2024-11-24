import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors.theme";
import { breakpoints } from "@/lib/constants";

const theme = extendTheme({
  colors: colors,
  breakpoints: breakpoints,
  components: {
    Switch: {
      baseStyle: {
        track: {
          bg: "black",
          _checked: {
            bg: "black",
          },
        },
        thumb: {
          bg: "white",
        },
      },
    },
  },
});

export const styles = {};

export default theme;
