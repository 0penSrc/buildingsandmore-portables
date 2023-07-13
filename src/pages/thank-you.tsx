import { type NextPage } from "next";
import Head from "next/head";
import Nav from "~/components/nav";
import Footer from "~/components/footer";
import GAnalytics from '~/components/ganalytics';

const ThankYou: NextPage = () => {

return (
    <>
          <Head>
        <title>Thank You | Buildings and More</title>
        <meta name="description" content="Buildings and More Portable Buildings" />
        <link rel="icon" href="/favicon.ico" />
        <GAnalytics/>
      </Head>
      <Nav/>
    <div className="flex items-center justify-center py-24">
      <div className="p-8 bg-white">
        <h1 className="text-5xl font-bold mb-4 text-center">Thank You!</h1>
        <p className="text-gray-700 max-w-2xl pt-10 text-center">Our team is currently reviewing your submission, and we will be in touch with you shortly.<br></br><br></br> We look forward to connecting with you to discuss your requirements and provide the best solutions tailored to your needs. Should you have any immediate questions or concerns, please feel free to reach out to us at any time.<br></br><br></br>Once again, thank you for considering Buildings and More. We value your business and the opportunity to serve you.<br></br><br></br>Best regards,<br></br>The Buildings and More Team</p>
      </div>
    </div>
    <Footer />
</>
)

}
export default ThankYou