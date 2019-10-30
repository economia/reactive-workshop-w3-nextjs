import React from 'react'
import { Container } from 'reactstrap'
import App from 'next/app'
import Head from 'next/head'
import { Navigation } from '../components/Navigation'
import 'bootstrap-css-only/css/bootstrap.min.css'

class Workshop extends App {
  render () {
    const {
      props: {
        Component,
        pageProps
      }
    } = this

    return (
      <>
        <Head>
          <title>Next.js Workshop</title>
        </Head>
        <Container fluid style={{ padding: 0 }}>
          <Navigation/>
          <Component {...pageProps}/>
        </Container>
      </>
    )
  }
}

export default Workshop
