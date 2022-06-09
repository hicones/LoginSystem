import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";

//react query
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

// contexts
import { AuthProvider } from "../src/context/AuthContext";

// components
import { Layout } from "../src/components/Layout";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <motion.main
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Layout>
            <ToastContainer />
            <Component {...pageProps} />
          </Layout>
        </motion.main>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
