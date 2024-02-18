import Image from "next/image";
import Profile from "@/app/components/profile";

export default function Home() {
  return (
    <main>
      <Profile
      name="Jessica Randall"
      address="London, United Kingdom"
      description="Front-end developer and avid reader."
      avatar="images/avatar-jessica.jpeg"
      ></Profile>
    </main>
  );
}
