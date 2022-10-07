import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'

import Section1 from '../components/section1'

export default function Home() {
  return (
    <>
    <Layout>
      <Section1 />
    </Layout>
    </>
  )
}
