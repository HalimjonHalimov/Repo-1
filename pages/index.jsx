import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello world
      <div className="flex flex-col gap-2 ">
        <Link href={"/auth/signin"}>Sign In</Link>
        <Link href={"/auth/signup"}>Sign Up</Link>
      </div>
    </div>
  );
}
