import { type NextPage } from "next";
import Head from "next/head";
import Nav from "~/components/nav";
import Footer from "~/components/footer";
import Zip from "~/components/Zip";
import SlopePricing from "~/components/single-slope-pricing";
import FooterHero from "~/components/footer-hero";
import TestimonialTwo from "~/components/testimonial-2";
import FeaturedProducts from "~/components/featured-products";
import GAnalytics from '~/components/ganalytics';

const SingleSlope: NextPage = () => {
    return (
      <>
        <Head>
          <title>Single Slopes | Buildings and More</title>
          <meta name="description" content="Buildings and More Portable Buildings" />
          <link rel="icon" href="/favicon.ico" />
          <GAnalytics/>
        </Head>
        <Nav/>


<section className="bg-white">
<Zip/>

</section>


<SlopePricing/>

<section className="bg-white dark:bg-gray-900">
<div className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-6xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-200">

		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold text-gray-800 hover:underline">Building Details</a>
			<p className="mt-2 text-gray-800">Standard w/48&#34; Weather-Tite Door, wood frame, Galvalume Steel Roofing secured to Steel Hat Channel. One slope roof design with roof to slope from one sidewall to other sidewall. 7&#39; wall height standard on low side, high side 1&#39; higher than low side. Add 10% for 7&#39;6&#34; Wall Height low side with 81611 wall high side, Add 4% for steel frame. Shingle roof is not an available option with this low slope roof design. Add $10.50 per perimeter foot for 3&#34; eave with soffit and fascia trim.</p>
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
  
  export default SingleSlope;