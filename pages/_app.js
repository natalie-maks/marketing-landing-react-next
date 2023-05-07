import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  let path;

  if (router.asPath == "/#about" || router.asPath == "/#services" || router.asPath == "/#blog") {
    path = "/";
  } else {
    path = router.asPath;
  }
  const onExitComplete = () => {
    if (router.asPath == "/#about" || router.asPath == "/#services" || router.asPath == "/#blog") {
      setTimeout(() => {
        window.location.href = router.asPath;
      }, 100);
    }
    window.scrollTo({ top: 0 });
  };

  return (
    <Layout>
      <AnimatePresence onExitComplete={onExitComplete} mode="wait" initial={false}>
        <Component key={path} {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}
