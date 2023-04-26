import { type NextPage } from "next";
import Head from "next/head";
import Nav from "~/components/nav";
import Footer from "~/components/footer";
import Delivery from "~/components/delivery";

const DeliveryPage: NextPage = () => {
    return (
      <>
        <Head>
          <title>FAQs | Buildings and More</title>
          <meta name="description" content="Buildings and More Portable Buildings" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav/>
        <section className="bg-white dark:bg-gray-900"><Delivery/></section>
        <Footer />
      </>
    );
  };
  
  export default DeliveryPage;