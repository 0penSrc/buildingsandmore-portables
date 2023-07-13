import { type NextPage } from "next";
import Head from "next/head";
import Nav from "~/components/nav";
import Footer from "~/components/footer";
import Zip from "~/components/Zip";
import TestimonialTwo from "~/components/testimonial-2";
import ScreenHousePricing from "~/components/screenhouse-pricing";
import FooterHero from "~/components/footer-hero";
import FeaturedProducts from "~/components/featured-products";
import GAnalytics from '~/components/ganalytics';

const ScreenHouses: NextPage = () => {
    return (
      <>
        <Head>
          <title>ScreenHouses | Buildings and More</title>
          <meta name="description" content="ScreenHouses - Buildings and More Portable Buildings" />
          <link rel="icon" href="/favicon.ico" />
          <GAnalytics/>
        </Head>
        <Nav/>


<section className="bg-white">
<Zip/>

</section>


<ScreenHousePricing/>

<section className="bg-white dark:bg-gray-900">
<div className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-6xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-200">

		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold text-gray-800 hover:underline">Building Details</a>
			<p className="mt-2 text-gray-800">Standard with steel stud frame, R*Lap siding in 6 standard colors, galvalume steel high rib roofing, no floor, pressure treated 2x4 base-rail, one-48&#34;x72&#34; Weather-Tite door, door is located on 6&#39; gable end, no windows, insulation is foil faced bubble wrap between siding and studs.</p>
		</div>
	</div>
</div>
</section>

<section className="bg-white dark:bg-gray-900">

<h2 className="text-4xl font-semibold text-center mb-6 mt-12">Customer Reviews</h2>

<TestimonialTwo/>
    
</section>

<section className="bg-white dark:bg-gray-900  max-w-screen-xl mx-auto">
<FeaturedProducts/>
</section>
        <FooterHero/>
        <Footer />
      </>
    );
  };
  
  export default ScreenHouses;