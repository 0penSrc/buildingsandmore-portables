import { useState } from "react"
import Stars from "./stars"
import Image from "next/image";
import Link from "next/link";

const GambrelSmartSidingPricing = () => {

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
        case "10x10":
          return "$4,681.35";
        case "10x12":
          return "$5,278.75";
        case "10xl4":
          return "$5,984.30";
        case "10x16":
          return "$6,252.10";
        case "10x20":
          return "$7,065.80";
        case "10x24":
          return "$8,440.85";
        case "12x12":
          return "$6,210.90";
        case "12x14":
          return "$6,926.75";
        case "12x16":
          return "$7,333.60";
        case "12x20":
          return "$9,022.80";
        case "12x24":
          return "$10,274.25";
        case "12x30":
          return "$12,566.00";
        case "12x32":
          return "$13,379.70";
        case "12x36":
          return "$15,001.95";
        case "12x40":
          return "$16,619.05";
        case "12x44":
          return "$18,246.45";
        case "14x24":
          return "$11,860.45";
        case "14x30":
          return "$14,502.40";
        case "14x32":
          return "$15,434.55";
        case "14x36":
          return "$17,304.00";
        case "14x40":
          return "$19,173.45";
        case "14x44":
          return "$21,053.20";        
        default:
          return "starting at $4,681.35";
      }
    };
    const getSize = (option: string) => {
        switch (option) {
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
              case "12x32":
                return "12x32";
              case "12x36":
                return "12x36";
              case "12x40":
                return "12x40";
              case "12x44":
                return "12x44";
              case "14x24":
                return "14x24";
              case "14x30":
                return "14x30";
              case "14x32":
                return "14x32";
              case "14x36":
                return "14x36";
              case "14x40":
                return "14x40";
              case "14x44":
                return "14x44";    
          default:
            return "";
        }
      };

    const getWindows = (option: string) => {
        switch (option) {
            case "10x10":
              return "1";
            case "10x12":
              return "2";
            case "10x14":
              return "2";
            case "10x16":
              return "2";
            case "10x20":
              return "2";
            case "10x24":
              return "2";
            case "12x12":
              return "2";
            case "12x14":
              return "2";
            case "12x16":
              return "2";
            case "12x20":
              return "2";
            case "12x24":
              return "2";
            case "12x30":
              return "4";
            case "12x32":
              return "4";
            case "12x36":
              return "4";
            case "12x40":
              return "4";
            case "12x44":
              return "4";
            case "14x24":
              return "4";
            case "14x30":
              return "4";
            case "14x32":
              return "4";
            case "14x36":
              return "4";
            case "14x40":
              return "4";
            case "14x44":
              return "4";
            default:
              return "1";
          }
        };

        const getLights = (option: string) => {
            switch (option) {
                case "10x10":
                    return "1";
                  case "10x12":
                    return "1";
                  case "10x14":
                    return "1";
                  case "10x16":
                    return "1";
                  case "10x20":
                    return "1";
                  case "10x24":
                    return "1";
                  case "12x12":
                    return "1";
                  case "12x14":
                    return "1";
                  case "12x16":
                    return "1";
                  case "12x20":
                    return "1";
                  case "12x24":
                    return "1";
                  case "12x30":
                    return "2";
                  case "12x32":
                    return "2";
                  case "12x36":
                    return "2";
                  case "12x40":
                    return "2";
                  case "12x44":
                    return "2";
                  case "14x24":
                    return "2";
                  case "14x30":
                    return "2";
                  case "14x32":
                    return "2";
                  case "14x36":
                    return "2";
                  case "14x40":
                    return "2";
                  case "14x44":
                    return "2";
                default:
                  return "1";
              }
            };

            const getOutlets = (option: string) => {
                switch (option) {
                    case "10x10":
                        return "1";
                      case "10x12":
                        return "1";
                      case "10x14":
                        return "1";
                      case "10x16":
                        return "1";
                      case "10x20":
                        return "1";
                      case "10x24":
                        return "1";
                      case "12x12":
                        return "1";
                      case "12x14":
                        return "1";
                      case "12x16":
                        return "1";
                      case "12x20":
                        return "1";
                      case "12x24":
                        return "1";
                      case "12x30":
                        return "2";
                      case "12x32":
                        return "2";
                      case "12x36":
                        return "2";
                      case "12x40":
                        return "2";
                      case "12x44":
                        return "2";
                      case "14x24":
                        return "2";
                      case "14x30":
                        return "2";
                      case "14x32":
                        return "2";
                      case "14x36":
                        return "2";
                      case "14x40":
                        return "2";
                      case "14x44":
                        return "2";          
                    default:
                      return "1";
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
                            case "10x10":
                              return "https://buy.stripe.com/7sI8yQ2GP2iYc2k14M";
                            case "10x12":
                              return "https://buy.stripe.com/fZe5mEftB7Di9Uc6p5";
                            case "10x14":
                              return "https://buy.stripe.com/5kA6qI0yHf5K8Q828O";
                            case "10x16":
                              return "https://buy.stripe.com/dR6eXe8199LqaYg28N";
                            case "10x20":
                              return "https://buy.stripe.com/7sI7uM3KT7Dic2kcNq";
                            case "10x24":
                              return "https://buy.stripe.com/8wM3ew95d2iY3vO00D";
                            case "12x12":
                              return "https://buy.stripe.com/aEUg1i95dbTyd6ocNo";
                            case "12x14":
                              return "https://buy.stripe.com/00gg1iftB7DigiA9Bb";
                            case "12x16":
                              return "https://buy.stripe.com/dR6dTa1CLe1Gc2kdRq";
                            case "12x20":
                              return "https://buy.stripe.com/cN2aGYa9h7DiaYgdRp";
                            case "12x24":
                              return "https://buy.stripe.com/8wM2as2GPbTy3vOeVs";
                            case "12x30":
                              return "https://buy.stripe.com/9AQ8yQ8199Lq3vO6oV";
                            case "12x32":
                              return "https://buy.stripe.com/3cs8yQftB0aQ2rKdRm";
                            case "12x36":
                              return "https://buy.stripe.com/7sI7uMepx4r6giA28D";
                            case "12x40":
                              return "https://buy.stripe.com/bIYbL2chpf5K9Uc5kO";
                            case "12x44":
                              return "https://buy.stripe.com/dR63ew0yHcXC1nG7sV";
                            case "14x24":
                              return "https://buy.stripe.com/00geXegxF9Lq4zS5kM";
                            case "14x30":
                              return "https://buy.stripe.com/9AQ6qI8194r6giAcNd";
                            case "14x32":
                              return "https://buy.stripe.com/cN23ewchp2iY9UccNc";
                            case "14x36":
                              return "https://buy.stripe.com/cN23ewgxF2iYfew6oN";
                            case "14x40":
                              return "https://buy.stripe.com/00gaGY2GPbTyc2keVi";
                            case "14x44":
                              return "https://buy.stripe.com/14k7uM95d9Lq9UceVh";  
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
src="/portable-4.png"
alt="Portable"
className="w-full lg:pr-6"
width={500}
height={500}
/>
</div> 

<div className="">
<h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">{getSize(selectedOption)} GAMBREL LOFTED BARN WITH SMART SIDING</h1>
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
<option>10x10</option>
<option>10x12</option>
<option>10x14</option>
<option>10x12</option>
<option>10x16</option>
<option>10x20</option>
<option>10x24</option>
<option>12x12</option>
<option>12x14</option>
<option>12x16</option>
<option>12x20</option>
<option>12x24</option>
<option>12x30</option>
<option>12x32</option>
<option>12x36</option>
<option>12x40</option>
<option>12x40</option>
<option>12x44</option>
<option>14x24</option>
<option>14x30</option>
<option>14x32</option>
<option>14x36</option>
<option>14x40</option>
<option>14x44</option>
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

export default GambrelSmartSidingPricing