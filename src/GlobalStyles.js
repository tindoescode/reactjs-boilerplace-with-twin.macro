import { createGlobalStyle } from "styled-components";
import tw, { theme, globalStyles } from "twin.macro";

const globals = {
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
};

const GlobalStyles = createGlobalStyle(globalStyles, globals); // Use two arguments so a deep merge happens

export default GlobalStyles;
