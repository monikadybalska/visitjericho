import Image from "next/image";
import { getHomepageHeroImage } from "@/app/_lib/api";

export default async function HeroImage() {
  const imageUrl = await getHomepageHeroImage();
  return (
    imageUrl && (
      <Image
        src={imageUrl}
        alt=""
        fill
        className="object-cover object-center z-0"
        priority
      />
    )
  );
}
