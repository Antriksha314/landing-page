import HomePageBanner from "@/components/home";
import Layout from "@/components/layout";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="My Next.js App" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePageBanner/>
    </Layout>
  );
}
