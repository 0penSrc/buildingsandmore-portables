import { type NextPage } from "next";
import Head from "next/head";
import Nav from "~/components/nav";
import Footer from "~/components/footer";
import Stars from "~/components/stars";
import Link from "next/link";
import Image from "next/image";
import GAnalytics from '~/components/ganalytics';

const BuildingsList: NextPage = () => {
    return (
      <>
        <Head>
          <title>Browse Buildings | Buildings and More</title>
          <meta
            name="description"
            content="Buildings and More Portable Buildings"
          />
          <link rel="icon" href="/favicon.ico" />
          <GAnalytics/>
        </Head>
        <Nav />
        <section className="bg-white dark:bg-gray-900">
          <div className="mainpage mx-auto max-w-screen-lg py-8 px-4 lg:py-16">
            <div className="xs:grid-cols-1 grid justify-items-center sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-4">
              <div className="max-w-sm rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
                <Link href="/gambriel-lofted-barn">
                  <Image
                    src="/portable-4.png"
                    alt="User profile picture"
                    width={500}
                    height={500}
                  />
                </Link>
                <div className="px-5 pb-5">
                  <Link href="/gambriel-lofted-barn">
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                     GAMBREL LOFTED BARN
                    </h3>
                  </Link>
                  <Stars />
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      $4,022.15
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>













    );
  };
  
  export default BuildingsList;