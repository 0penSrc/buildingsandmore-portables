import { type NextPage } from "next";
import Head from "next/head";
import Nav from "~/components/nav";
import Footer from "~/components/footer";
import Zip from "~/components/Zip";
import TestimonialThree from "~/components/testimonial-3";
import GreenhousePricing from "~/components/greenhouse-pricing";
import FooterHero from "~/components/footer-hero";
import FeaturedProducts from "~/components/featured-products";
import GAnalytics from '~/components/ganalytics';

const Greenhouses: NextPage = () => {
    return (
      <>
        <Head>
          <title>Greenhouses | Buildings and More</title>
          <meta name="description" content="Buildings and More Portable Buildings" />
          <link rel="icon" href="/favicon.ico" />
          <GAnalytics/>
        </Head>
        <Nav/>


<section className="bg-white">
<Zip/>

</section>


<GreenhousePricing/>

<section className="bg-white dark:bg-gray-900">
<div className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-6xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-200">

		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold text-gray-800 hover:underline">Building Details</a>
			<p className="mt-2 text-gray-800">Standard with 48x72 Weather Tite door, galvanized steel stud frame, 7&#39; wall, SolarSoft pigmented polycarbonate exterior, no floor, 2x4 PT baserail, 2 shipping skids, 1 layer 12&#39; shelving on 3 sides, wiring in PVC flex conduit.</p> 
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
  
  export default Greenhouses;