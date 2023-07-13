import { type NextPage } from "next";
import Head from "next/head";
import Nav from "~/components/nav";
import Footer from "~/components/footer";
import FinancingPage from "~/components/financing";
import GAnalytics from '~/components/ganalytics';

const Financing: NextPage = () => {
    return (
      <>
        <Head>
          <title>Financing | Buildings and More</title>
          <meta name="description" content="Buildings and More Portable Buildings" />
          <link rel="icon" href="/favicon.ico" />
          <GAnalytics/>
        </Head>
        <Nav/>
        <section className="bg-white dark:bg-gray-900"><FinancingPage/></section>
        <Footer />
      </>
    );
  };
  
  export default Financing;