import { type NextPage } from "next";
import Head from "next/head";
import Nav from "~/components/nav";
import Footer from "~/components/footer";
import Zip from "~/components/Zip";
import TestimonialTwo from "~/components/testimonial-2";
import PorchPricing from "~/components/porch-pricing";
import FooterHero from "~/components/footer-hero";
import FeaturedProducts from "~/components/featured-products";
import GAnalytics from '~/components/ganalytics';

const PorchModels: NextPage = () => {
    return (
      <>
        <Head>
          <title>Porch Models | Buildings and More</title>
          <meta name="description" content="Buildings and More Portable Buildings" />
          <link rel="icon" href="/favicon.ico" />
          <GAnalytics/>
        </Head>
        <Nav/>


<section className="bg-white">
<Zip/>

</section>


<PorchPricing/>

<section className="bg-white dark:bg-gray-900">
<div className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-6xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-200">

		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold text-gray-800 hover:underline">Building Details</a>
			<p className="mt-2 text-gray-800">Standard with 36&#34; x 72&#34; MH door, wood frame, 7&#39; interior wall height, end gable 4&#39; porch across 1 end, rails on 3 sides of porch with 60&#34; opening in rail on end Rails may be painted the following colors: Ash Gray, Tan, Clay, Brown, Black, Charcoal, Barn Red, Hunter Green, Hawaiian Blue, Moss Green. Add 10% for 7&#39;6&#34; Wall Height, Add 4% for steel frame, Add logistics fee on all 14 wides. Add $10.50 per perimeter foot for 3&#34; eave with soffit and fascia trim. Add $250 for 6&#39; porch in place of standard 4&#39; porch</p> 
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
  
  export default PorchModels;