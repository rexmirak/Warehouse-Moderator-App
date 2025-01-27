import Head from 'next/head';
import { useRouter } from "next/router";

export default function products() {
      const router = useRouter();
      const { pageTitle } = router.query; // Get the query parameter
  return (
    <div className="min-h-screen p-2 flex flex-col justify-start items-center">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <h1 className="text-blue-500 font-bold text-3xl align-top">
          #TODO
        </h1>
      </main>
    </div>
  );
}
