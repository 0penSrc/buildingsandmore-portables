import { type NextPage } from "next";
import Head from "next/head";
import Nav from "~/components/nav";
import Footer from "~/components/footer";
import Zip from "~/components/Zip";
import TestimonialThree from "~/components/testimonial-3";
import GambrelSmartSidingPricing from "~/components/gambrel-smart-siding-pricing";
import FooterHero from "~/components/footer-hero";
import FeaturedProducts from "~/components/featured-products";
import GAnalytics from '~/components/ganalytics';

const GambrielLofted: NextPage = () => {
    return (
      <>
        <Head>
          <title>Gambrel Lofted Barn WITH Smart Siding | Buildings and More</title>
          <meta name="description" content="Buildings and More Portable Buildings" />
          <link rel="icon" href="/favicon.ico" />
          <GAnalytics/>
        </Head>
        <Nav/>


<section className="bg-white">
<Zip/>

</section>


<GambrelSmartSidingPricing/>

<section className="bg-white dark:bg-gray-900">
<div className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-6xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-200">

		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold text-gray-800 hover:underline">Building Details</a>
			<p className="mt-2 text-gray-800">All units are standard with R*LAP siding , galvalume steel high rib roofing, 77&quot; sidewall height, one 48&quot;x72&quot; Weather-Tite Door, one loft 4&apos; deep across 1 end, white grid windows. Add $1200 for High Loft Cabin w 4&apos; porch across one gable end & 36x78 lnswing 9-Lite Door RH. Add $1450 for High Loft Cabin w 6&apos; porch across one gable end & 36x78 lnswing 9-Lite Door RH. Add $1430 for Side Loft Cabin w 4&apos;x8&apos; porch on one side at corner & 36x78 lnswing 9-Lite Door RH. Add logistics fee for all 14 wides.</p>
		</div>
	</div>
</div>
</section>

<section className="bg-white dark:bg-gray-900">

<h2 className="text-4xl font-semibold text-center mb-6 mt-12">Customer Reviews</h2>

<TestimonialThree/>
    
</section>
<section className="bg-white dark:bg-gray-900  max-w-screen-xl mx-auto">
<FeaturedProducts/>
</section>
        <FooterHero/>
        <Footer />
      </>
    );
  };
  
  export default GambrielLofted;