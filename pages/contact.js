import { motion } from "framer-motion";

import AnimationPage from "@/components/AnimationPage";

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
          <label className="block text-lg text-white pb-2 ml-3" htmlFor="name">
            Name
          </label>
          <input
            className="py-3 px-6 mr-3 mb-4 w-full bg-transparent border-[1px] border-lightgrey rounded-3xl"
            type="text"
            id="name"
            required
            placeholder="John Doe"
          />
          <label className="block text-lg text-white pb-2 ml-3" htmlFor="email">
            Email
          </label>
          <input
            className="py-3 px-6 mr-3 mb-4 w-full bg-transparent border-[1px] border-lightgrey rounded-3xl"
            type="email"
            required
            id="email"
            placeholder="johm@example.com"
          />
          <label className="block text-lg text-white pb-2 ml-3" htmlFor="message">
            Message
          </label>
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
