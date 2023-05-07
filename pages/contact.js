import { useState } from "react";
import { motion } from "framer-motion";

import AnimationPage from "@/components/AnimationPage";
import MessageDialog from "@/components/Dialogs/MessageDialog";
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut", type: "tween" }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-x-12"
      >
        <div className="self-center">
          <h1 className="text-3xl font-semibold mt-12 mb-6">Leave us a message</h1>
          <p className="text-xl">
            Tell us your problem and we will get back with solution shortly!
          </p>
        </div>
        <form onSubmit={handleMessageSubmit} className="max-w-[600px] mt-12">
          <FormLabel title={"Name"} forBlock={"name"} />
          <FormInput type={"text"} id={"name"} placeholder={"John Doe"} />
          <FormLabel title={"Email"} forBlock={"email"} />
          <FormInput type={"email"} id={"email"} placeholder={"johm@example.com"} />
          <FormLabel title={"Message"} forBlock={"message"} />
          <textarea
            id="message"
            placeholder="Your message here"
            rows="5"
            required
            className="py-3 px-6 mr-3 w-full bg-transparent border-[1px] border-lightgrey rounded-3xl"
          />
          <button className="mt-4 min-w-[200px] text-white py-3 px-6 mb-4 rounded-full bg-blue hover:translate-y-[-2px] shadow-md hover:shadow-darkblue">
            Send
          </button>
        </form>
      </motion.div>
      {successMessage && <MessageDialog clearMessage={clearMessage} />}
    </AnimationPage>
  );
};

export default contact;
