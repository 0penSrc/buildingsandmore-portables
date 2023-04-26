import { type NextPage } from "next";
import Head from "next/head";
import Nav from "~/components/nav";
import Footer from "~/components/footer";
import WarrantyPage from "~/components/warranty";

const Warranty: NextPage = () => {
    return (
      <>
        <Head>
          <title>Warranty | Buildings and More</title>
          <meta name="description" content="Buildings and More Portable Buildings" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav/>
        <section className="bg-white dark:bg-gray-900"><WarrantyPage/></section>
        <Footer />
      </>
    );
  };
  
  export default Warranty;