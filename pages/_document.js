import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // eslint-disable-next-line no-param-reassign
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line react/jsx-props-no-spreading
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Links */}
          <link href="manifest.json" rel="manifest" />
          <link href="favicon.ico" rel="icon" />

          {/* Scripts */}
          <Script
            crossOrigin="anonymous"
            src="https://kit.fontawesome.com/4133372eed.js"
            strategy="beforeInteractive"
          />
          {/* Status Page and analitics */}
          {/* {process.env.NEXT_PUBLIC_APP_ENV === 'production' ? (
            <>
              <Script
                src="https://www.datadoghq-browser-agent.com/datadog-rum.js"
                type="text/javascript"
                strategy="beforeInteractive"
              />
              <Script
                src="https://{code}.statuspage.io/embed/script.js"
                strategy="beforeInteractive"
              />
            </>
          ) : null} */}

          {/* CSS imports */}
        </Head>
        <body>
          <a className="skip-link" href="#main">
            Skip to main
          </a>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
