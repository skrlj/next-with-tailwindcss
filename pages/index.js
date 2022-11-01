import Head from 'next/head'

import { PageHeading } from "../components/page-heading"

export default function Home() {
  return (
    <>
        <Head>
          <meta charset="UTF-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="description" content="Tutorial on how to configure NEXT.js with tailwindcss."/>
          <title>Learning React Vercel Deployment</title>
        </Head>
        
        <PageHeading title="Deploying To Vercel"
          tagline="setting up a continuous integration continuous deployment workflow."/>
    </>

     
  )
}
