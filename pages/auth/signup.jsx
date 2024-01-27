import { BgImage, Button, Input } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import AuthService from "@/service/api.service";
import { signFunction } from "@/service/axios.config";
import image from "@/public/404.png";
import axios from 'axios'

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [prePassword, setPrePassword] = useState("");
  const [isEqual, setIsEqual] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    const fetchingData = async () => {
      const response = await AuthService.getCurrentUser()
      console.log(response);
    }
    fetchingData()
  }, [])
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    if (password == prePassword) {
      const data = {
        name: `${username}`,
        email: `${username}@gmail.com`,
        key: `${password}`,
        secret: `${username}`,
      };
      try {
        const response = await AuthService.getAuthSignup(data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      setIsEqual(false);
      setIsloading(false);
    } else {
      setIsEqual(true);
    }
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
            <Button type={'button'} width={false} label={"Go Home Page"} route={""}/>
            <Button type={'button'} width={false} label={"Reload Page"} route={"auth/signin"}/>
            </div>
          </div>
        ) : (
          <div className="w-[400px] h-auto p-6 bg-white rounded-md border-none shadow">
            <div className="text-black text-3xl font-semibold text-center mb-4">
              Sign up
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
                state={password}
                setState={setPassword}
                isEqual={isEqual}
                text={"Enter your password"}
              />
              <Input
                type="password"
                label={"password"}
                state={prePassword}
                setState={setPrePassword}
                text={"Repeat your password"}
              />
              <button
                type="submit"
                className="w-full h-auto py-2 rounded text-sm font-semibold text-white mt-[1.5rem] border border-[#6200EE] bg-[#6200EE]  hover:bg-white hover:text-[#6200EE] transition"
              >
                {isloading ? (
                  <>
                    <CircularProgress size={20} color={"inherit"} />
                  </>
                ) : (
                  <>Submit</>
                )}
              </button>
            </form>
            <div className="text-black text-center font-sans text-sm my-4 text-slate-600">
              Already signed up?{" "}
              <Link href={"/auth/signin"} className="text-[#6200EE]">
                Go to sign in.
              </Link>
            </div>
          </div>
        )}
      </div>
    </BgImage>
  );
};

export default SignUp;
