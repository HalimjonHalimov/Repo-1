import { BgImage, Container, Content, Navbar } from "@/components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentUser, setcurrentUser] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (!currentUser) {
      router.push("/auth/signup");
    }
  }, []);

  return (
    <BgImage>
      <Container>
        <Navbar />
        <Content />
      </Container>
    </BgImage>
  );
}
