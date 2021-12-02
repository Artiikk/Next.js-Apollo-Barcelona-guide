import Head from 'next/head'

const CustomHead = ({ title, description }) => (
  <Head>
    <meta charSet={'UTF-8'} />
    <meta name={'title'} content={title} />
    <meta name={'description'} content={description} />
    <meta name={'keywords'} content={'API, rozetka, service'} />
    <meta name={'author'} content={'Shestopalov Artur'} />
    <meta name={'viewport'} content={'width=device-width, initial-scale=1.0'} />

    <link rel={'icon'} href={'/favicon.svg'} />
    <link rel={'mask-icon'} href={'/favicon.svg'} color={'#000000'} />

    <title>{title}</title>
  </Head>
)

export default CustomHead
