import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'

import Section1 from '../components/section1'
import Section2 from '../components/section2'
import Section3 from '../components/section3'

export default function Home() {
  return (
    <>
    <Layout>
      <Section1 />
      <Section2 />
      <Section3 />
    </Layout>
    </>
  )
}
