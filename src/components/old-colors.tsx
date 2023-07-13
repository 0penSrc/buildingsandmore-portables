import Image from "next/image"
const OldColors = () => {
  return (
<>

<section className="bg-white dark:bg-gray-900">
<div className="mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-12">
  <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
    Available Colors
  </h2>
  <div className="xs: grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8  ">
    <div className="flex flex-col items-center">
      <Image
        src="/white.webp"
        alt="White"
        className="w-full"
        width="100"
        height="100"
      />
      <span className="mt-2">White</span>
    </div>
    <div className="flex flex-col items-center">
      <Image
        src="/evergreen.webp"
        alt="Green"
        className="w-full"
        width="100"
        height="100"
      />
      <span className="mt-2">Evergreen</span>
    </div>
    <div className="flex flex-col items-center">
      <Image
        src="/burgundy.webp"
        alt="Burgundy"
        className="w-full"
        width="100"
        height="100"
      />
      <span className="mt-2">Burgundy</span>
    </div>
    <div className="flex flex-col items-center">
      <Image
        src="/beige.webp"
        alt="Beige"
        className="w-full"
        width="100"
        height="100"
      />
      <span className="mt-2">Beige</span>
    </div>
    <div className="flex flex-col items-center">
      <Image
        src="/tan.webp"
        alt="Tan"
        className="w-full"
        width="100"
        height="100"
      />
      <span className="mt-2">Tan</span>
    </div>
    <div className="flex flex-col items-center">
      <Image
        src="/sand.webp"
        alt="Sand"
        className="w-full"
        width="100"
        height="100"
      />
      <span className="mt-2">Sand</span>
    </div>
    <div className="flex flex-col items-center">
      <Image
        src="/clay.webp"
        alt="Clay"
        className="w-full"
        width="100"
        height="100"
      />
      <span className="mt-2">Clay</span>
    </div>
    <div className="flex flex-col items-center">
      <Image
        src="/brown.webp"
        alt="Brown"
        className="w-full"
        width="100"
        height="100"
      />
      <span className="mt-2">Brown</span>
    </div>
    <div className="flex flex-col items-center">
      <Image
        src="/blue.webp"
        alt="Blue"
        className="w-full"
        width="100"
        height="100"
      />
      <span className="mt-2">Blue</span>
    </div>
    <div className="flex flex-col items-center">
      <Image
        src="/gray.webp"
        alt="Gray"
        className="w-full"
        width="100"
        height="100"
      />
      <span className="mt-2">Gray</span>
    </div>
    <div className="flex flex-col items-center">
      <Image
        src="/quaker.webp"
        alt="Quaker"
        className="w-full"
        width="100"
        height="100"
      />
      <span className="mt-2">Quaker</span>
    </div>
    <div className="flex flex-col items-center">
      <Image
        src="/black.webp"
        alt="Black"
        className="w-full"
        width="100"
        height="100"
      />
      <span className="mt-2">Black</span>
    </div>
    <div className="flex flex-col items-center">
      <Image
        src="/barn-red.webp"
        alt="Barn Red"
        className="w-full"
        width="100"
        height="100"
      />
      <span className="mt-2">Barn Red</span>
    </div>
  </div>
</div>
</section>

</>

)
}
    
export default OldColors