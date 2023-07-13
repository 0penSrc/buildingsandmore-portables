import { useState, useEffect } from 'react';
import Image from 'next/image';
const images = [
  '/rev-3.png',
  '/rev-2.png',
  '/rev-1.png',
];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="relative min-h-[400px] m-auto max-w-[800px]">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          width={677}
          height={300}
          alt={`Image ${index}`}
          className={`absolute top-0 left-0 w-full h-auto transition-opacity duration-500 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default Slider;
