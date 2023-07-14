import Image from 'next/image';
import Link from 'next/link';

const FeaturedProducts = () => {
  return (
    
    <>
<h2 className="text-4xl font-semibold text-center mb-6 mt-12">Featured Buildings</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 sm:gap-2 mb-12">
          <Link href="/end-gables?selectedOption=8x12">
            <div className="bg-white p-4 rounded shadow">
                  <Image
                    src="/portable-13.png"
                    alt="User profile picture"
                    width={500}
                    height={500}
                  />
            <h3 className="text-lg font-bold">8x12 END GABLE</h3>
            <p className="text-gray-500">END GABLES</p>
            <p className="text-emerald-600 font-bold">$3,156.95</p>
          </div>
          </Link>
          <Link href="/end-gables?selectedOption=8x10">
          <div className="bg-white p-4 rounded shadow">
                  <Image
                    src="/portable-14.png"
                    alt="User profile picture"
                    width={500}
                    height={500}
                  />
            <h3 className="text-lg font-bold">8x10 END GABLE</h3>
            <p className="text-gray-500">END GABLES</p>
            <p className="text-emerald-600 font-bold">$2,755.25</p>
          </div>
          </Link>
          <Link href="/end-gables?selectedOption=10x12">
          <div className="bg-white p-4 rounded shadow">
                  <Image
                    src="/portable-15.png"
                    alt="User profile picture"
                    width={500}
                    height={500}
                  />
            <h3 className="text-lg font-bold">10x12 END GABLE</h3>
            <p className="text-gray-500">END GABLES</p>
            <p className="text-emerald-600 font-bold">$3,713.15</p>
          </div>
          </Link>
          <Link href="/end-gables?selectedOption=10x16">
          <div className="bg-white p-4 rounded shadow">
                  <Image
                    src="/portable-16.png"
                    alt="User profile picture"
                    width={500}
                    height={500}
                  />
            <h3 className="text-lg font-bold">10x16 END GABLE</h3>
            <p className="text-gray-500">END GABLES</p>
            <p className="text-emerald-600 font-bold">$4,665.90</p>
          </div>
          </Link>
          <Link href="/greenhouses?selectedOption=8x12">
          <div className="bg-white p-4 rounded shadow">
                  <Image
                    src="/portable-17.png"
                    alt="User profile picture"
                    width={500}
                    height={500}
                  />
            <h3 className="text-lg font-bold">8x12 GREENHOUSE</h3>
            <p className="text-gray-500">GREENHOUSES</p>
            <p className="text-emerald-600 font-bold">$3,522.60</p>
          </div>
          </Link>
          <Link href="/greenhouses?selectedOption=8x10">
          <div className="bg-white p-4 rounded shadow">
                  <Image
                    src="/portable-18.png"
                    alt="User profile picture"
                    width={500}
                    height={500}
                  />
            <h3 className="text-lg font-bold">8x10 GREENHOUSE</h3>
            <p className="text-gray-500">GREENHOUSES</p>
            <p className="text-emerald-600 font-bold">$3,131.20</p>
          </div>
          </Link>
          <Link href="/screenhouses?selectedOption=12x16">
          <div className="bg-white p-4 rounded shadow">
                  <Image
                    src="/portable-19.png"
                    alt="User profile picture"
                    width={500}
                    height={500}
                  />
            <h3 className="text-lg font-bold">12x16 SCREENHOUSE</h3>
            <p className="text-gray-500">SCREEN HOUSES</p>
            <p className="text-emerald-600 font-bold">$3,131.20</p>
          </div>
          </Link>
          <Link href="/porch-models?selectedOption=12x24">
          <div className="bg-white p-4 rounded shadow">
                  <Image
                    src="/portable-20.png"
                    alt="User profile picture"
                    width={500}
                    height={500}
                  />
            <h3 className="text-lg font-bold">12x24 GAMBRIEL PORCH BARN</h3>
            <p className="text-gray-500">PORCH MODELS</p>
            <p className="text-emerald-600 font-bold">$7,575.00</p>
          </div>
          </Link>






















      </div>
    </>
  );
};

export default FeaturedProducts;
