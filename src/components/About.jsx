import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me </span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div 
          whileInView={{ opacity: 1, x: 0}}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5}}
          className="w-full lg:w-1/2 lg:p-8">
           <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
           </div>
        </motion.div>
        <motion.div
         whileInView={{ opacity: 1, x: 0}}
         initial={{ opacity: 0, x: 100 }}
         transition={{ duration: 0.5}}
         className="w-full lg:w-1/2">
               <div className="flex justify-center lg:justify-start">
                  <p className="my-2 max-w-xl py-6 text-justify">I am a passionate and driven IT professional with a strong foundation in software development. As a fresher, I bring a fresh perspective and a keen eagerness to learn and innovate. I excel in Java, leveraging my expertise in object-oriented programming, data structures, and algorithms to create efficient and robust solutions. I am adept at managing and manipulating data with MySQL and MongoDB, ensuring optimal performance and reliability. Additionally, I am proficient in Bash scripting and Git for seamless version control and development workflows, and I have hands-on experience deploying applications on AWS. Some of my notable projects include developing a classic Snake Game using Java and a comprehensive Banking Application utilizing Spring Boot, Spring Data JPA (Hibernate), MySQL, and REST APIs. I am excited to bring my skills to innovative projects and continuously expand my expertise in a dynamic professional environment.</p>
               </div>
            </motion.div>
      </div>
    </div>
  )
}

export default About
