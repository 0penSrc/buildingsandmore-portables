import { type NextPage } from "next";
import Head from "next/head";
import Nav from "~/components/nav";
import Footer from "~/components/footer";
import Faq from "~/components/faq";
import GAnalytics from '~/components/ganalytics';

const Faqs: NextPage = () => {
    return (
      <>
        <Head>
          <title>FAQs | Buildings and More</title>
          <meta name="description" content="Buildings and More Portable Buildings" />
          <link rel="icon" href="/favicon.ico" />
          <GAnalytics/>
        </Head>
        <Nav/>
        <section className="bg-white dark:bg-gray-900"><Faq/></section>
        <Footer />
      </>
    );
  };
  
  export default Faqs;