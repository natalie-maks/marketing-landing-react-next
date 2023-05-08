import { useState } from "react";
import { motion } from "framer-motion";

import NewsletterDialog from "@/components/Dialogs/NewsletterDialog";
import FormInput from "../UI/FormInput.jsx";

import { item, footerColCont } from "../../assets/motionConst.js";

const MotionInput = motion(FormInput);

const FooterCol3 = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const clearMessage = () => {
    setSuccessMessage(false);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
    setTimeout(() => {
      clearMessage();
    }, 3000);
    e.target.reset();
  };

  return (
    <motion.div variants={footerColCont} className="sm:col-span-2 lg:col-span-1">
      <motion.h3 variants={item} className="text-xl font-medium">
        Subscribe to our newsletter
      </motion.h3>
      <motion.p variants={item} className="my-6">
        Receive best new articles on digital marketing, social media content, SEO, etc.
      </motion.p>
      <form
        onSubmit={handleEmailSubmit}
        className="flex flex-col sm:flex-row lg:flex-col xl:flex-row"
      >
        <MotionInput
          variants={item}
          type={"email"}
          id={"newsletter-email"}
          placeholder={"Your email address"}
        />
        <motion.button
          variants={item}
          className="mb-4 py-3 px-6 rounded-full bg-blue text-white hover:translate-y-[-2px] shadow-md hover:shadow-darkblue"
        >
          Subscribe
        </motion.button>
      </form>
      {successMessage && <NewsletterDialog clearMessage={clearMessage} />}
    </motion.div>
  );
};

export default FooterCol3;
