import { BgImage, Container, Input } from "@/components";
import Link from "next/link";
import { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  console.log(username);
  return (
    <BgImage>
    <div className="w-full h-full flex justify-center items-center mt-12">
      <div className="w-[400px] h-auto p-6 bg-white rounded-md border-none shadow">
        <div className="text-black text-3xl font-semibold text-center mb-4">
          Sign in
        </div>
        <form>
          <Input
            type="text"
            label={"username"}
            text={"Enter your username"}
            state={username}
            setState={setUsername}
          />
          <Input
            type="password"
            label={"password"}
            text={"Enter your password"}
          />
          <button
            type="submit"
            className="w-full h-auto py-2 rounded text-sm font-semibold text-white mt-[1.5rem] border border-[#6200EE] bg-[#6200EE]  hover:bg-white hover:text-[#6200EE] transition"
          >
            Submit
          </button>
        </form>
        <div className="text-black text-center font-sans text-sm my-4 text-slate-600">
          Already signed in?{" "}
          <Link href={"/auth/signup"} className="text-[#6200EE]">
            Go to sign in.
          </Link>
        </div>
      </div>
    </div>
  </BgImage>
  )
}

export default SignIn