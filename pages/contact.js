import { useState } from "react";
import { motion } from "framer-motion";

import AnimationPage from "@/components/AnimationPage";
import MessageDialog from "@/components/Dialogs/MessageDialog";
import Meta from "@/components/Layout/Meta";
import FormLabel from "@/components/UI/FormLabel";
import FormInput from "@/components/UI/FormInput";

const contact = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const clearMessage = () => {
    setSuccessMessage(false);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
    setTimeout(() => {
      clearMessage();
    }, 3000);
    e.target.reset();
  };

  return (
    <AnimationPage>
      <Meta
        title={"WeGrow - Contact us"}
        description={"WeGrow is a marketing agency that helps brands scale with content marketing"}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut", type: "tween" }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-x-12 items-center min-h-fullScreen"
      >
        <div>
          <h1 className="mb-6 text-3xl font-semibold">Leave us a message</h1>
          <p className="text-xl">
            Tell us your problem and we will get back with solution shortly!
          </p>
        </div>
        <form onSubmit={handleMessageSubmit} className="max-w-[600px]">
          <FormLabel title={"Name"} forBlock={"name"} />
          <FormInput type={"text"} id={"name"} placeholder={"John Doe"} />
          <FormLabel title={"Email"} forBlock={"email"} />
          <FormInput type={"email"} id={"email"} placeholder={"johm@example.com"} />
          <FormLabel title={"Message"} forBlock={"message"} />
          <textarea
            className="w-full py-3 px-6 mr-3 bg-transparent border-[1px] border-lightgrey rounded-3xl"
            id="message"
            placeholder="Your message here"
            rows="5"
            required
          />
          <button className="min-w-[200px] mt-4 py-3 px-6 rounded-full bg-blue text-white hover:translate-y-[-2px] shadow-md hover:shadow-darkblue">
            Send
          </button>
        </form>
      </motion.div>
      {successMessage && <MessageDialog clearMessage={clearMessage} />}
    </AnimationPage>
  );
};

export default contact;
