import { type NextPage } from "next";
import Head from "next/head";
import Nav from "~/components/nav";
import Footer from "~/components/footer";
import GAnalytics from '~/components/ganalytics';

const ThankYouStripe: NextPage = () => {

return (
    <>
          <Head>
        <title>Thank You Stripe | Buildings and More</title>
        <meta name="description" content="Buildings and More Portable Buildings" />
        <link rel="icon" href="/favicon.ico" />
        <GAnalytics/>
      </Head>
      <Nav/>
    <div className="flex items-center justify-center py-24">
      <div className="bg-white max-w-4xl">
        <h1 className="text-5xl font-bold mb-4 text-center">Thank You!</h1>
        <p className="text-gray-700 pt-10 text-center text-2xl">On behalf of Buildings and More, we would like to extend our heartfelt gratitude for choosing us for your building needs. We are thrilled that you have completed your checkout and are now one step closer to enjoying your new building.
<br></br><br></br>
At Buildings and More, we take immense pride in providing high-quality buildings that meet your unique requirements. Whether you&#39;re looking for a storage shed, a workshop, or a customized structure, we are committed to delivering exceptional products that exceed your expectations.
<br></br><br></br>
We understand that selecting the right building is an important decision, and we are honored that you have placed your trust in us. Our team of experts has worked tirelessly to ensure that your checkout process was seamless and hassle-free.
<br></br><br></br>
As your purchase is now confirmed, our dedicated team will diligently process your order and prepare your building for delivery. We will keep you informed at every step of the way, ensuring a smooth and efficient experience.
<br></br><br></br>
Should you have any questions or require further assistance, our friendly customer support team is here to help. You can reach us via email at support@buildingsandmore.com or call us directly at [customer support number]. We are always ready to provide you with the assistance you need.
<br></br><br></br>
Once again, thank you for choosing Buildings and More. We are honored to be a part of your journey and look forward to serving you with the highest level of quality and service.<br></br><br></br>The Buildings and More Team</p>
      </div>
    </div>
    <Footer />
</>
)

}
export default ThankYouStripe