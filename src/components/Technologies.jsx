import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaTerminal } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiAmazonaws } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"> Skills </motion.h1>
        <motion.div 
        whileInView={{ opacity: 1, x:0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiReactjsLine className="text-7xl text-cyan-400" />
      </motion.div>
      <motion.div 
      variants={iconVariants(3)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaJava className="text-7xl text-orange-600" />
      </motion.div>
      <motion.div
      variants={iconVariants(5)}
      initial="initial"
      animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiMysql className="text-7xl text-blue-500" />
      </motion.div>
      <motion.div 
      variants={iconVariants(2)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiMongodb className="text-7xl text-green-500" />
      </motion.div>
      <motion.div 
      variants={iconVariants(6)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaTerminal className="text-7xl text-gray-600" />
      </motion.div>
      <motion.div 
      variants={iconVariants(4)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaGitAlt className="text-7xl text-red-500" />
      </motion.div>
      <motion.div 
      variants={iconVariants(2)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiAmazonaws className="text-7xl text-yellow-500" />
      </motion.div>
      <motion.div 
      variants={iconVariants(6)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiSpring className="text-7xl text-green-600" />
      </motion.div>
      <motion.div 
      variants={iconVariants(2.5)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiHibernate className="text-7xl text-brown-500" />
      </motion.div>
    </motion.div>
    </div>
  )
}

export default Technologies
