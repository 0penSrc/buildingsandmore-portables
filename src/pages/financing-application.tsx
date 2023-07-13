import { type NextPage } from "next";
import Head from "next/head";
import Nav from "~/components/nav";
import Footer from "~/components/footer";
import LeaseForm from "~/components/lease-form";
import GAnalytics from '~/components/ganalytics';

const backgroundImage = "/home-banner.jpg";

const FinancingApp: NextPage = () => {
  return (
    <>
      <Head>
        <title>Financing Application | Buildings and More</title>
        <meta name="description" content="Buildings and More Portable Buildings" />
        <link rel="icon" href="/favicon.ico" />
        <GAnalytics/>
      </Head>
      <Nav/>
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, minHeight: `300px`, maxHeight: `700px`,}}>
      <header className="flex items-center justify-center min-h-300px">
      </header>
    </div>
    <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center mt-8">Financing Application</h2>
      <LeaseForm/>
      <Footer />
    </>
  );
};

export default FinancingApp;