import { useState } from "react"
import Stars from "./stars"
import Image from "next/image";
import Link from "next/link";

const ScreenHousePricing = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageId) => {
      setSelectedImage(imageId);
    };
  
    const isImageSelected = (imageId) => {
      return selectedImage === imageId;
    };

    const [selectedOption, setSelectedOption] = useState("10x10");

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(event.target.value);
    };
  
    const getPrice = (option: string) => {
      switch (option) {
        case "8x10":
            return "$3,540.00";
          case "8x12":
            return "$4,065.00";
          case "8x14":
            return "$4,695.00";
          case "8x16":
            return "$5,325.00";
          case "10x10":
            return "$4,330.00";
          case "10x12":
            return "$4,860.00";
          case "10x14":
            return "$5,530.00";
          case "10x16":
            return "$6,205.00";
          case "10x20":
            return "$7,505.00";
          case "10x24":
            return "$9,010.00";
          case "12x12":
            return "$5,710.00";
          case "12x14":
            return "$6,445.00";
          case "12x16":
            return "$7,220.00";
          case "12x20":
            return "$8,820.00";
          case "12x24":
            return "$10,400.00";
          case "12x30":
            return "$12,735.00";
        default:
          return "starting at $3,540.00";
      }
    };
    const getSize = (option: string) => {
        switch (option) {
              case "8x14":
                return "8x14";
              case "8x16":
                return "8x16";
              case "10x10":
                return "10x10";
              case "10x12":
                return "10x12";
              case "10x14":
                return "10x14";
              case "10x16":
                return "10x16";
              case "10x20":
                return "10x20";
              case "10x24":
                return "10x24";
              case "12x12":
                return "12x12";
              case "12x14":
                return "12x14";
              case "12x16":
                return "12x16";
              case "12x20":
                return "12x20";
              case "12x24":
                return "12x24";
              case "12x30":
                return "12x30";
        default:
            return "8x14";
        }
      };

    const getWindows = (option: string) => {
        switch (option) {
            case "8x10":
                return "0";
              case "8x12":
                return "0";
              case "8x14":
                return "0";
              case "8x16":
                return "0";
              case "10x10":
                return "0";
              case "10x12":
                return "0";
              case "10x14":
                return "0";
              case "10x16":
                return "0";
              case "10x20":
                return "0";
              case "10x24":
                return "0";
              case "12x12":
                return "0";
              case "12x14":
                return "0";
              case "12x16":
                return "0";
              case "12x20":
                return "0";
              case "12x24":
                return "0";
              case "12x30":
                return "0";
         default:
           return "0";
          }
        };

        const getOutlets = (option: string) => {
            switch (option) {
                case "8x10":
                    return "0";
                  case "8x12":
                    return "0";
                  case "8x14":
                    return "0";
                  case "8x16":
                    return "0";
                  case "10x10":
                    return "0";
                  case "10x12":
                    return "0";
                  case "10x14":
                    return "0";
                  case "10x16":
                    return "0";
                  case "10x20":
                    return "0";
                  case "10x24":
                    return "0";
                  case "12x12":
                    return "0";
                  case "12x14":
                    return "0";
                  case "12x16":
                    return "0";
                  case "12x20":
                    return "0";
                  case "12x24":
                    return "0";
                  case "12x30":
                    return "0";
             default:
               return "0";
              }
            };
        const getLights = (option: string) => {
            switch (option) {
                case "8x10":
                    return "0";
                  case "8x12":
                    return "0";
                  case "8x14":
                    return "0";
                  case "8x16":
                    return "0";
                  case "10x10":
                    return "0";
                  case "10x12":
                    return "0";
                  case "10x14":
                    return "0";
                  case "10x16":
                    return "0";
                  case "10x20":
                    return "0";
                  case "10x24":
                    return "0";
                  case "12x12":
                    return "0";
                  case "12x14":
                    return "0";
                  case "12x16":
                    return "0";
                  case "12x20":
                    return "0";
                  case "12x24":
                    return "0";
                  case "12x30":
                    return "0";
                default:
                  return "0";
                 }
                };


                const getLease = (option: string) => {
                  switch (option) {
                      default:
                        return "55.39";
                    }
                  };


                  const getFinance = (option: string) => {
                      switch (option) {
                            default:
                              return "134.39";
                        }
                      };


                        const getStripeLink = (option: string) => {
                          switch (option) {
                            case "8x10":
                              return "https://buy.stripe.com/3cs3ewdltcXCgiA03n";
                            case "8x12":
                              return "https://buy.stripe.com/6oE3ew0yH7Dic2k2bu";
                            case "8x14":
                              return "https://buy.stripe.com/28o16o95dbTyc2kdUb";
                            case "8x16":
                              return "https://buy.stripe.com/dR69CU8197Di0jC17o";
                            case "10x10":
                              return "https://buy.stripe.com/6oEeXea9h5vaeas6rH";
                            case "10x12":
                              return "https://buy.stripe.com/14k2as8193n2easg2g";
                            case "10x14":
                              return "https://buy.stripe.com/14kaGYbdle1G0jC8zN";
                            case "10x16":
                              return "https://buy.stripe.com/4gw16oftBf5K4zSbLY";
                            case "10x20":
                              return "https://buy.stripe.com/28o6qI8190aQd6o7vH";
                            case "10x24":
                              return "https://buy.stripe.com/7sIaGY8195va7M4bLW";
                            case "12x12":
                              return "https://buy.stripe.com/eVacP6gxF1eU4zS03d";
                            case "12x14":
                              return "https://buy.stripe.com/9AQbL24OX9Lq4zScPY";
                            case "12x16":
                              return "https://buy.stripe.com/14kdTa5T1bTyaYg4jr";
                            case "12x20":
                              return "https://buy.stripe.com/3cs16ochp0aQgiA4jq";
                            case "12x24":
                              return "https://buy.stripe.com/6oE5mEepx8Hm8Q8eY3";
                            case "12x30":
                              return "https://buy.stripe.com/8wMeXe1CLf5K3vO8zE";
                              default:
                                return "#";
                            }
                          };



    return (
<>
<section className="bg-white dark:bg-gray-900">

<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">


<div className="grid xs:grid-cols-1 justify-items-center sm:grid-cols-2 sm:gap-2 md:grid-cols-2 md:gap-2 lg:grid-cols-2 lg:gap-2">

<div className="w-full">
<Image
src="/portable-7.png"
alt="Portable"
className="w-full lg:pr-6"
width={500}
height={500}
/>
</div> 

<div className="">
<h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">{getSize(selectedOption)} SCREENHOUSE</h1>
<Stars></Stars>
<p className="price text-4xl text-emerald-700 font-bold">
          {getPrice(selectedOption)}
        </p>
        <p className="price text-xl text-emerald-700">
        Finance: ${getLease(selectedOption)}/month *
        </p>
        <p className="price text-xl text-emerald-700">
        Lease: ${getFinance(selectedOption)}/month *
        </p>
<p className="text-sm">*Payment does not include sales tax, late fees or other charges that may apply.</p>
<div className="mt-4 mb-6">


<div className="mb-5 xs: grid grid-cols-6 gap-2 sm:grid-cols-4 lg:grid-cols-8  ">
      <div
        className={`flex flex-col items-center ${
          isImageSelected('white') ? 'ring-2 ring-red-500' : ''
        }`}
        onClick={() => handleImageClick('white')}
      >
        <div className="relative">
          <Image src="/white.webp" alt="White" width="60" height="60" className="shadow-md pt-2" />
        </div>
        <span className="mt-2 text-center">White</span>
      </div>
      <div
        className={`flex flex-col items-center ${
          isImageSelected('lightstone') ? 'ring-2 ring-red-500' : ''
        }`}
        onClick={() => handleImageClick('lightstone')}
      >
        <div className="relative">
          <Image src="/beige.webp" alt="lightstone" width="60" height="60" className="shadow-md pt-2" />
        </div>
        <span className="mt-2 text-center">Stone</span>
      </div>
      <div
        className={`flex flex-col items-center ${
          isImageSelected('tan') ? 'ring-2 ring-red-500' : ''
        }`}
        onClick={() => handleImageClick('tan')}
      >
        <div className="relative">
          <Image src="/tan.webp" alt="tan" width="60" height="60" className="shadow-md pt-2" />
        </div>
        <span className="mt-2 text-center">Tan</span>
      </div>
      <div
        className={`flex flex-col items-center ${
          isImageSelected('ashgray') ? 'ring-2 ring-red-500' : ''
        }`}
        onClick={() => handleImageClick('ashgray')}
      >
        <div className="relative">
          <Image src="/sand.webp" alt="ashgray" width="60" height="60" className="shadow-md pt-2" />
        </div>
        <span className="mt-2 text-center">Ash Gray</span>
      </div>  
      <div
        className={`flex flex-col items-center ${
          isImageSelected('clay') ? 'ring-2 ring-red-500' : ''
        }`}
        onClick={() => handleImageClick('clay')}
      >
        <div className="relative">
          <Image src="/clay.webp" alt="clay" width="60" height="60" className="shadow-md pt-2" />
        </div>
        <span className="mt-2 text-center">Clay</span>
      </div>  
      <div
        className={`flex flex-col items-center ${
          isImageSelected('charcoal') ? 'ring-2 ring-red-500' : ''
        }`}
        onClick={() => handleImageClick('charcoal')}
      >
        <div className="relative">
          <Image src="/quaker.webp" alt="charcoal" width="60" height="60" className="shadow-md pt-2" />
        </div>
        <span className="mt-2 text-center">Charcoal</span>
      </div>  
</div>


<div className="relative inline-flex self-center">
<svg className="text-white bg-red-700 absolute top-0 right-0 m-2 pointer-events-none p-2 rounded" xmlns="http://www.w3.org/2000/svg"  width="40px" height="40px" viewBox="0 0 38 22" version="1.1">
<title>Building Size</title>
<g id="ZahnhelferDE—Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g transform="translate(-539.000000, -199.000000)" fill="#ffffff" fillRule="nonzero">
        <g id="Icon-/-ArrowRight-Copy-2" transform="translate(538.000000, 183.521208)">
            <polygon id="Path-Copy" transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) " points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"/>
        </g>
    </g>
</g>
</svg>
<select className="text-2xl font-bold rounded border-2 border-gray-200 text-gray-600 h-14 w-60 pl-5 pr-10 bg-gray-100 shadow-md hover:border-gray-300 focus:outline-none appearance-none" value={selectedOption} onChange={handleOptionChange}>
<option>8x10</option>
<option>8x12</option>
<option>8x14</option>
<option>8x16</option>
<option>10x10</option>
<option>10x12</option>
<option>10x14</option>
<option>10x16</option>
<option>10x20</option>
<option>10x24</option>
<option>12x12</option>
<option>12x14</option>
<option>12x16</option>
<option>12x20</option>
<option>12x24</option>
<option>12x30</option>
</select>
</div>
</div>



<p></p>

<Link href={getStripeLink(selectedOption)} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 mb-1">
    Buy Now
</Link>
<Link href="/lease-application" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 mb-1">
    Lease
</Link>
<Link href="/financing-application" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 mb-1">
    Finance
</Link>
<Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 mb-1">
    Contact Us
</Link>

</div>

</div>
    </div>
</section>

<section className="bg-white dark:bg-gray-900">
  <div className="pb-8 px-4 mx-auto max-w-screen-xl sm:pb-16 lg:px-6">
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:space-y-0">


  <div className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
  <div className="pt-4 text-gray-500">
    <svg
      className="h-8 w-8 sm:h-10 sm:w-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-blinds"><path d="M3 3h18"></path><path d="M20 7H8"></path><path d="M20 11H8"></path><path d="M10 19h10"></path><path d="M8 15h12"></path><path d="M4 3v14"></path><circle cx="4" cy="19" r="2"></circle></svg>
    </svg>

    <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
      Windows
    </h3>

    <p className="mt-2 text-xl sm:block">
    {getWindows(selectedOption)} (22x36)
    </p>
  </div>

  <span className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
    Included
  </span>
</div>

<div className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
  <div className="pt-4 text-gray-500">
    <svg
      className="h-8 w-8 sm:h-10 sm:w-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
    </svg>

    <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
      Lights
    </h3>

    <p className="mt-2 text-xl sm:block">
    {getLights(selectedOption)}
    </p>
  </div>

  <span className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
    Included
  </span>
</div>

<div className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
  <div className="pt-4 text-gray-500">
    <svg
      className="h-8 w-8 sm:h-10 sm:w-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path><path d="M2 20h20"></path><path d="M14 12v.01"></path></svg>
    </svg>

    <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
      Doors
    </h3>

    <p className="mt-2 text-xl sm:block">
      1 (48&apos;x72&apos;)
    </p>
  </div>

  <span className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
    Included
  </span>
</div>







<div className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
  <div className="pt-4 text-gray-500">
    <svg
      className="h-8 w-8 sm:h-10 sm:w-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plug"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
    </svg>

    <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
      Outlets
    </h3>

    <p className="mt-2 text-xl sm:block">
    {getOutlets(selectedOption)}
    </p>
  </div>

  <span className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
    Included
  </span>
</div>


</div>
  </div>
</section>

</>
)
}

export default ScreenHousePricing