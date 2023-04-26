import { type NextPage } from "next";
import Head from "next/head";
import Nav from "~/components/nav";
import Footer from "~/components/footer";
import Stars from "~/components/stars";
import FeaturesOne from "~/components/features-1";
import Image from "next/image";

const Gambriel: NextPage = () => {
    return (
      <>
        <Head>
          <title>10x10 Gambriel Lofted Barn | Buildings and More</title>
          <meta name="description" content="Buildings and More Portable Buildings" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav/>
        <section className="bg-white dark:bg-gray-900">

        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">


        <div className="grid xs:grid-cols-1 justify-items-center sm:grid-cols-2 sm:gap-2 md:grid-cols-2 md:gap-2 lg:grid-cols-2 lg:gap-2">

        <div className="w-full">
        <Image
        src="/portable-4.png"
        alt="Portable"
        className="pr-6"
        width={500}
        height={500}
        />
        </div>  


        <div className="">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">10x10 GAMBREL LOFTED BARN</h1>
            <p className="price text-4xl text-emerald-700 font-bold">$4,022.15</p>
            <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">All units are standard with R*LAP siding , galvalume steel high rib roofing, 77&quot; sidewall height, one 48&quot;x72&quot; Weather-Tite Door, one loft 4&apos; deep across 1 end, white grid windows. Add $1200 for High Loft Cabin w 4&apos; porch across one gable end & 36x78 lnswing 9-Lite Door RH. Add $1450 for High Loft Cabin w 6&apos; porch across one gable end & 36x78 lnswing 9-Lite Door RH. Add $1430 for Side Loft Cabin w 4&apos;x8&apos; porch on one side at corner & 36x78 lnswing 9-Lite Door RH. Add logistics fee for all 14 wides.</p>
            
            <Stars></Stars>
            
            <a href="https://buy.stripe.com/test_3csdUH1PpaeO3hmfYY" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Buy Now
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a> 
        </div>
              
    </div>
    </div>
</section>
<section className="bg-white dark:bg-gray-900">
    <FeaturesOne/>
</section>

        <Footer />
      </>
    );
  };
  
  export default Gambriel;