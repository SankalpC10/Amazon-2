import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
          <!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q4K5STWR05"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q4K5STWR05');
          </script>
      </Head>
      <Header/>
      <main className="max-w-screen-2xl mx-auto bg-gray-200">
        {/*Banner*/}
        <Banner />
        {/*Product Feed*/}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps (context){
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) =>res.json()
  );
  return {
    props:{
      products,
    },
  };
}
