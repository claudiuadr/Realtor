import Router from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  return (
    <>
      <Head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
      </Head>
      
      {/* Zendesk Chat Widget */}
      <Script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=e9e4cf0e-428d-4c26-b992-046032f5affd"
        strategy="afterInteractive"
      />

<Script id="helpscout-beacon-loader" strategy="afterInteractive">
  {`!function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});`}
</Script>
<Script id="helpscout-beacon-init" strategy="afterInteractive">
  {`window.Beacon('init', '7aa81b14-0fc8-4c0f-af10-c7848a050772');`}
</Script>


<Script
        id="freshworks-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.fwSettings = {
              widget_id: 206000000231
            };
            !function(){
              if (typeof window.FreshworksWidget !== "function") {
                var n = function() {
                  n.q.push(arguments);
                };
                n.q = [];
                window.FreshworksWidget = n;
              }
            }();
          `,
        }}
      />
      <Script
        src="https://euc-widget.freshworks.com/widgets/206000000231.js"
        strategy="afterInteractive"
      /> 
      
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;