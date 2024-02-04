import Head from "next/head";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Your Website Title</title>
        <meta name="description" content="Your website description" />
      </Head>

      <main className="flex-1 py-4 relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="absolute inset-0 bg-black opacity-50">
          <Header />
        </div>
        <div className="container mx-auto py-8 mb-8">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
