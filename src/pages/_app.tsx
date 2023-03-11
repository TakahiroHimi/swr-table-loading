import type { AppProps } from "next/app";
import styled, {
  createGlobalStyle,
  css,
  ThemeProvider,
} from "styled-components";
import cssBaseLine from "smarthr-normalize-css";
import { createTheme, ThemeProvider as SHUIThemeProvider } from "smarthr-ui";

export const theme = createTheme();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SHUIThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ContainerLayout>
            <Component {...pageProps} />
          </ContainerLayout>
        </ThemeProvider>
      </SHUIThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  ${cssBaseLine}
`;

const ContainerLayout = styled.div(
  ({ theme: { space } }) => css`
    max-width: 920px;
    margin-inline: auto;
    padding: ${space(1.5)} ${space(2)} ${space(4)};
  `
);
