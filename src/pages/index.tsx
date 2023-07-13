import { type NextPage } from "next";
import Head from "next/head";
import Footer from "~/components/footer";
import Link from "next/link";
import Nav from "~/components/nav";
import BuildTypes from "~/components/buildingtypes";
import FeaturesOne from "~/components/features-1";
import TestimonialOne from "~/components/testimonial-1";
import Image from "next/image";
import FooterHero from "~/components/footer-hero";
import GAnalytics from '~/components/ganalytics';

/* eslint-disable */
function readProductModal(){

document.addEventListener("DOMContentLoaded", function(event) {
        document.getElementById('readProductButton')!.click();
  });
}
/* eslint-enable */
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Buildings and More</title>
        <meta
          name="high-quality storage buildings screen room, carport, utility building, or gazebo"
          content="Buildings and More Portable Buildings"
        />
        <link rel="icon" href="/favicon.ico" />
        <GAnalytics/>
      </Head>
      <Nav/>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl py-4 px-4 text-center lg:py-8 lg:px-12">
          <Link
            href="/all-buildings"
            className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 py-1 px-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="mr-3 rounded-full bg-primary-600 px-4 py-1.5 text-xs text-white">
              SALE
            </span>{" "}
            <span className="text-sm font-medium">
              Extended Sale Happening Now
            </span>
            <svg
              className="ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Your Best Local Online <br />
            Dealer for Outdoor Buildings
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
            Here at Buildings And More, we offer an impressive range of
            high-quality storage buildings to suit your requirements. Whether
            you need a screen room, carport, utility building, or gazebo, you
            can be confident we’ll be able to help.
          </p>
          <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 lg:mb-16">
            <Link
              href="/all-buildings"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 py-3 px-5 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Our Buildings
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 py-3 px-5 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            
            >
             Contact Us
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <BuildTypes />
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-lg px-4 pb-4 sm:pb-16 lg:px-6">
          <div className="mb-4 lg:mb-8">
            <Image
            src="/shipping.png"
            width={200}
            height={200}
            className="mx-auto mb-4"
            alt="shipping"
            ></Image>
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center">
              Ready for delivery within 7-10 business days
            </h2>
            <p className="text-gray-500 dark:text-gray-400 sm:text-xl text-center">
              We make it easy! Ordering is simple procedure and with our
              easy-to-navigate 3-D building designer, professional staff waiting
              to assist you, and our well-stocked dealers located throughout the
              southeast, we make your portable building dreams a quick reality.
              In most cases, we can process a custom order and have the building
              ready for delivery or pick up within 7-10 working days.
            </p>
          </div>
        </div>
        <FeaturesOne />
      </section>
      <section className="bg-white dark:bg-gray-900">
        <TestimonialOne />
      </section>


      <div
        id="readProductModal"
        aria-hidden="true"
        className="h-modal fixed top-0 right-0 left-0 z-50 hidden w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
      >
        <div className="relative h-full w-full max-w-xl p-4 md:h-auto">
          <div className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
            <div className="mb-4 flex justify-between rounded-t sm:mb-5">
              <div className="text-lg text-gray-900 dark:text-white md:text-xl">
                <h3 className="font-semibold ">PLACEHOLDER - TEMPORARY</h3>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="readProductModal"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Image
                src="/video-1.png"
                alt="Video"
                className="w-full"
                width="100"
                height="100"
              />
            </div>
          </div>
        </div>
      </div>
<FooterHero/>
      <Footer />
    </>
  );
};

export default Home;
