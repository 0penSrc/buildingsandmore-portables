import { type NextPage } from "next";
import Head from "next/head";
import Nav from "~/components/nav";
import Footer from "~/components/footer";
import Delivery from "~/components/delivery";
import GAnalytics from '~/components/ganalytics';

const DeliveryPage: NextPage = () => {
    return (
      <>
        <Head>
          <title>Delivery Information | Buildings and More</title>
          <meta name="description" content="Buildings and More Portable Buildings" />
          <link rel="icon" href="/favicon.ico" />
          <GAnalytics/>
        </Head>
        <Nav/>
        <section className="bg-white dark:bg-gray-900"><Delivery/></section>
        <Footer />
      </>
    );
  };
  
  export default DeliveryPage;