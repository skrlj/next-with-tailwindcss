# Deploying To Vercel
 Vercel are a cloud platform as a service company who also maintain the Next.js web development framework. Vercel's architecture is built around Jamstack, and deployments are handled through Git repositories. Today your going to learn how to deploy a NEXT.js app to Vercel from a GitHub repository.

 <br/>

##  What Is Vercel
Vercel is an easy to use developer friendly hosting platform for your Jamstack applicaitons. The service provides. Vercel Makes it easy to setup a continuous integration continuous delivery pipeline CI/CD for your projects and it offers a global distrobution network, optimizations, edge functions, zero-configuration, caching, speed and reliability.  
There is also one click installs for more than 35  frontend frameworks with zero configuration. It addition to framework support Vercel provides integrations for headless CMS, commerce, and databases. Vercel makes it easy to develop, preview, and ship your app to the edge and is worth the time investment to learn if your interested in the Jamstack.  

 <br/>
<br/>



## Pre Flight Check List  
Before you start using Vercel for your CI/CD pipline you need to make sure you have a few things setup.


### You Must Have A GitHub Account  
Please create a GitHub account if you do not have one.To set up the continuous integration continuous delivery pipeline CI/CD you should use GitHub for your source control. If you do not have one create an account [GitHub Account Sign Up Page](https://github.com/signup.   

 <br/>

### You Must Have A GitHub Account  
You need to have a Vercel account. You will be using GitHub for our projects source control. So when creating an account on Vercel use the Continue with GitHub option. Some of you may already have a Vercel account but if not please create a [Vercel Account Sign Up Page](https://vercel.com/login).  

<br/>

## Setting Up Tailwindcss
To setup and configure Tailwindcss you can either download the starter template from Next.js or you can cusomize the configuration by following the guide on the Tailwind site [Tailwindcss with Next](https://nextra.vercel.app/get-started#quick-start-with-vercel). 

### Tailwind Resources
1. [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
2. [Tailwind Playground](https://play.tailwindcss.com/)
3. [Tailwind Templates](https://tailwindui.com/templates)
4. [Tailwind Components](https://tailwindui.com/templates)
5. [DaisyUI Component Library](https://daisyui.com/)

```jsx
<div className="bg-gradient-to-br from-blue-500 to-blue-400 via-sky-500  w-full h-screen flex justify-center items-center">
    <header className="text-center">
        <h1 className=" text-4xl md:text-6xl lg:text-8xl   font-extrabold text-gray-200 pb-2">
        Deploying To Vercel
        </h1>
        <p className="text-sm md:text-lg lg:text-2xl text-gray-800/50">setting up a continuous integration continuous deployment workflow.</p>
    </header>
</div>

```

## Setting NEXT.js Page Head Element
By default the _app component adds the head element with some default settings. You need to set this on a page basis using the next/head component. If you have a favourite html framework you can grab that boiler plate markup and copy it to the next/head component as demonstratated.      

```jsx
   <Head>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="description" content="Tutorial on how to configure NEXT.js with tailwindcss.">
      <title>Learning React Vercel Deployment</title>
    </Head>
```




```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  }
}

module.exports = nextConfig


```