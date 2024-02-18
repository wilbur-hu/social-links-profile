import Image, { StaticImageData } from "next/image";
import Button from "./button";

export default function Profile({
  name,
  avatar,
  address,
  description,
}: {
  name: string;
  avatar: string | StaticImageData;
  address: string;
  description: string;
}) {
  return (
    <div className="flex-col flex w-96 py-8 px-10 bg-dark-grey rounded-xl items-center">
      <div className="relative w-24 h-24">
        <Image src={avatar} alt={name} fill className="rounded-full" />
      </div>
      <div className="text-white mt-7 text-2xl">{name}</div>
      <div className="text-green mt-3 text-sm">{address}</div>
      <div className="text-white mt-7 text-sm">{description}</div>

      <Button className="mt-4">GitHub</Button>
      <Button className="mt-4">Frontend Mentor</Button>
      <Button className="mt-4">Twitter</Button>
      <Button className="mt-4">LinkedIn</Button>
      <Button className="mt-4">Instagram</Button>
    </div>
  );
}
