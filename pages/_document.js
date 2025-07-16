import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* Zendesk Widget - loads after all Next.js scripts */}
        <script 
          id="ze-snippet" 
          src="https://static.zdassets.com/ekr/snippet.js?key=e9e4cf0e-428d-4c26-b992-046032f5affd"
        />
      </body>
    </Html>
  )
}