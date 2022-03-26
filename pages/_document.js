import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" className='scroll-smooth'>
        <Head>
          <meta name="description" content="Minu's Porfolio inspired from CodeBucks' portfolio" />

          <link rel='icon' href='/cat-bag.ico' />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600&family=Pacifico&family=Source+Sans+Pro:wght@400;600;700&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}