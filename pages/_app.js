import Layout from "../components/Layout";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
        body {
          background-color: #13191d;
        }
      `}</style>
    </>
  );
}

export default MyApp;
