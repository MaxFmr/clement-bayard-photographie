import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Blank = (): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);
  return (
    <Head>
      <title>Clément Bayard - Photographe</title>
    </Head>
  );
};
export default Blank;
