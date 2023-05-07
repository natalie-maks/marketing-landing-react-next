import { motion } from "framer-motion";

import FormInput from "../UI/FormInput.jsx";

import { item, footerColCont } from "../../assets/motionConst.js";

const MotionInput = motion(FormInput);

const FooterCol3 = () => {
  return (
    <motion.div variants={footerColCont} className="sm:col-span-2 lg:col-span-1">
      <motion.h3 variants={item} className="text-xl font-medium">
        Subscribe to our newsletter
      </motion.h3>
      <motion.p variants={item} className="my-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit
      </motion.p>
      <form className="flex flex-col sm:flex-row lg:flex-col xl:flex-row">
        <MotionInput
          variants={item}
          type={"email"}
          id={"newsletter-email"}
          placeholder={"Your email address"}
        />
        <motion.button
          variants={item}
          className="text-white py-3 px-6 mb-4 rounded-full bg-blue hover:translate-y-[-2px] shadow-md hover:shadow-darkblue"
        >
          Subscribe
        </motion.button>
      </form>
    </motion.div>
  );
};

export default FooterCol3;
