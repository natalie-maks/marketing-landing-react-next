import HeroSectionImagesImg from "./HeroSectionImagesImg";

import green from "@/assets/green.png";
import yellow from "@/assets/yellow.png";
import orange from "@/assets/orange.png";
import blue from "@/assets/blue.png";

const images = [
  {
    id: `hero image 1`,
    color: green,
    styles: `rounded-br-none lg:row-start-1 lg:row-end-3`,
    alt: `smiling woman with tablet`,
  },
  {
    id: `hero image 2`,
    color: yellow,
    styles: `rounded-bl-none lg:row-start-3 lg:row-end-4`,
    alt: `smiling woman`,
  },
  {
    id: `hero image 3`,
    color: blue,
    styles: `rounded-tr-none lg:row-start-1 lg:row-end-2`,
    alt: `smiling man`,
  },
  {
    id: `hero image 4`,
    color: orange,
    styles: `rounded-tl-none lg:row-start-2 lg:row-end-4`,
    alt: `smiling man in glasses`,
  },
];

const HeroSectionImages = () => {
  return (
    <div className="lg:w-2/5 max-h-[460px] 2xl:max-h-[660px] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-none grid-rows-2 sm:grid-rows-none lg:grid-rows-3 lg:gap-x-12 gap-6">
      {images.map((image, index) => (
        <HeroSectionImagesImg key={image.id} image={image} index={index} />
      ))}
    </div>
  );
};

export default HeroSectionImages;
