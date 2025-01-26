import Head from 'next/head';
import Card from "../components/cardComponent"
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const { pageTitle } = router.query; // Get the query parameter
  return (
    <div className="min-h-screen p-2 flex flex-col justify-start items-center">
      <Head>
        <title>Warehouse Moderation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-blue-500 font-bold text-3xl text-center ">
          Welcome to <span className='text-blue-700'> {pageTitle || "Moderation App Home"}</span>
        </h1>

        <div className="flex items-center justify-center flex-wrap max-w-[800px] mt-12">
          <Card
            title={"Name"}
            description={"Karim Ahmed"}
          ></Card>
          <Card
            title={"Age"}
            description={"24"}
          ></Card>
          <Card
            title={"Email Address"}
            description={"Karim.ahmed7660@gmail.com"}
          ></Card>
          <Card
            title={"Phone Number"}
            description={"+201118808688"}
          ></Card>
          <Card
            title={"University & Graduation Year"}
            description={"GUC 2024"}
          ></Card>


        </div>
      </main>
    </div>
  );
}
