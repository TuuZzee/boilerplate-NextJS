import React, { ReactNode } from 'react';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';

import constants, { ErrorLevels } from 'src/utils/constants';
import metaProps from 'src/utils/metaProps';

import EnvironmentBadge from './EnvironmentBadge';
import ErrorBoundary from './ErrorBoundary';
import FirebaseCollectionsLoaders from './dataLoaders/firebase/Collections';
// import FirestoreCollectionsLoaders from './dataLoaders/firestore/Collections';
import Nav from './Nav';

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  // [Note]: locale setting is async in the context

  return (
    <div id="main-layout">
      {/* Scripts */}
      <Script
        src="https://kit.fontawesome.com/4133372eed.js"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      {/* Status Page and analitics */}
      {process.env.NEXT_PUBLIC_APP_ENV === 'production' ? (
        <>
          {/* <Script
            src="https://www.datadoghq-browser-agent.com/datadog-rum.js"
            type="text/javascript"
            strategy="beforeInteractive"
          />
          <Script
            src="https://{code}.statuspage.io/embed/script.js"
            strategy="beforeInteractive"
          /> */}
        </>
      ) : null}

      {/* SEO */}
      <DefaultSeo
        title={metaProps.title}
        // keywords={metaProps.keywords[metaLocale]}
        description={metaProps.description}
        openGraph={{
          type: 'website',
          url: constants.DOMAIN,
          site_name: 'Boilerplate',
          description: metaProps.description,
          images: [{ url: metaProps.og.global.imageUrl, width: 650, height: 340 }],
        }}
      />

      <FirebaseCollectionsLoaders route={router ? router.route : null} />
      {/* <FirestoreCollectionsLoaders route={router ? router.route : null} /> */}
      <ErrorBoundary errorLevel={ErrorLevels.layout}>
        <div>
          <Nav />
          <div>{children}</div>
        </div>
      </ErrorBoundary>
      <EnvironmentBadge />
    </div>
  );
};

export default Layout;
