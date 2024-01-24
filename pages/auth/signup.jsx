import { BgImage, Input } from "@/components";
import Link from "next/link";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import AuthService from "@/service/api.service";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [prePassword, setPrePassword] = useState("");
  const [isEqual, setIsEqual] = useState(false);
  const [isloading, setIsloading] = useState(false);

  const fetchingData = async () => {
    try {
      const response = await AuthService.getCurrentUser()
      console.log(response);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    fetchingData();
  }, []);

  const handleSubmit = async (e) => {
    setIsloading(true);
    e.preventDefault();
    if (password == prePassword) {
      setIsEqual(false);
      setIsloading(false);
    } else {
      setIsEqual(true);
    }
    // setUsername('')
    // setPassword('')
    // setPrePassword('')
  };

  return (
    <BgImage>
      <div className="w-full h-full flex justify-center items-center mt-12">
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
      </div>
    </BgImage>
  );
};

export default SignUp;
