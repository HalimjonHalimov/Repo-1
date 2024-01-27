import { BgImage, Button, Container, Input } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import image from "@/public/404.png";
import AuthService from "@/service/api.service";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username, password };
    const response = await AuthService.getAuthSignin(data)
    console.log(response);
  };

  return (
    <BgImage>
      <div className="w-full h-full flex justify-center items-center">
        {currentUser ? (
          <div className="w-[720px] h-auto border-rose-500 text-black">
            <div className="w-full h-full">
              <Image
                src={image}
                alt="Page not found"
                width={"100%"}
                height={"100%"}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center items-center gap-4">
              <Button
                type={"button"}
                width={false}
                label={"Go Home Page"}
                route={""}
              />
              <Button
                type={"button"}
                width={false}
                label={"Reload Page"}
                route={"auth/signup"}
              />
            </div>
          </div>
        ) : (
          <div className="w-[400px] h-auto p-6 bg-white rounded-md border-none shadow">
            <div className="text-black text-3xl font-semibold text-center mb-4">
              Sign in
            </div>
            <form onSubmit={handleSubmit}>
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
                state={password}
                setState={setPassword}
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
        )}
      </div>
    </BgImage>
  );
};

export default SignIn;
