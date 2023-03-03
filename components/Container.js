import Head from "next/head";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Container({ children }) {
  const meta = {
    title: "",
    description: ``,
    image: "",
    type: "",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Header />
      <main tabIndex={-1}>{children}</main>
      <Footer />
    </>
  );
}
