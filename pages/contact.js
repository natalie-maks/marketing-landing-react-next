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
        className="grid lg:grid-cols-2 gap-x-12"
      >
        <div className="self-center">
          <h1 className="text-3xl font-semibold mt-12 mb-6">Leave us a message</h1>
          <p className="text-xl">
            Tell us your problem and we will get back with solution shortly!
          </p>
        </div>
        <form className="max-w-[600px] mt-12">
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
