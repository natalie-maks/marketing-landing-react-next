import { motion } from "framer-motion";

import AnimationPage from "@/components/AnimationPage";
import FormLabel from "@/components/UI/FormLabel";
import FormInput from "@/components/UI/FormInput";

const contact = () => {
  return (
    <AnimationPage>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="max-w-[600px] mx-auto"
      >
        <h1 className="text-2xl font-semibold mt-12 mb-6 ml-3">Leave us a message</h1>
        <form>
          <FormLabel title={"Name"} forBlock={"name"} />
          <FormInput type={"text"} id={"name"} placeholder={"John Doe"} />
          <FormLabel title={"Email"} forBlock={"email"} />
          <FormInput type={"email"} id={"email"} placeholder={"johm@example.com"} />
          <FormLabel title={"Message"} forBlock={"message"} />
          <textarea
            id="message"
            placeholder="Your message here"
            rows="5"
            className="py-3 px-6 mr-3 w-full bg-transparent border-[1px] border-lightgrey rounded-3xl"
          />
        </form>
      </motion.div>
    </AnimationPage>
  );
};

export default contact;
