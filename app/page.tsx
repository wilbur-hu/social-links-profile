import Profile from "@/app/components/profile";
import avatar from "@/public/images/avatar-jessica.jpeg";

export default function Home() {
  return (
    <>
      <main className="flex justify-center items-center bg-off-black h-full">
        <Profile
          name="Jessica Randall"
          address="London, United Kingdom"
          description='"Front-end developer and avid reader."'
          avatar={avatar}
        ></Profile>
      </main>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/wilbur-hu" target="_blank">Wilbur Hu</a>.
      </div>
    </>
  );
}
