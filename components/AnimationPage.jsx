import Footer from "./Layout/Footer";
import React from "react";
import { motion } from "framer-motion";
const AnimationPage = ({ children }) => {
  return (
    <>
      <motion.main
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto px-4 md:px-12 my-20 overflow-x-hidden"
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
};

export default AnimationPage;
