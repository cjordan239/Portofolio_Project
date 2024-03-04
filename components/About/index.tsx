import React from 'react';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
    return (
        <div className='flex justify-center mt-28'>
            <div className="flex mx-80 flex-col items-center gap-y-6">
                <div className="flex items-center gap-x-6 p-4">
                    <img className="h-16 w-16 rounded-full" src="/newspaper.jpg" alt="this my photo" />
                </div>
                <div className='bg-gray-25 p-6 rounded-lg shadow-lg border-2 border-gray-300'>
                    <motion.h2
                     className="text-2xl font-semibold mb-4 text-center text-gray-800 leading-relaxed"
                     initial={{opacity:0, y:100}}
                     animate={{opacity:1, y:100}}
                    >
                      Hello! My name is Jordan. I have a bachelor in management, but I'm currently in the process of transitioning to a career as a front-end developer. I'm excited to embark on this new journey and learn more about web development!
                    </motion.h2>
                </div>
                <div className='flex flex-row'>

                    <a href="https://www.linkedin.com/in/chrisjordanig"><FaLinkedin size={"2rem"} /></a>
                    <a href="#dummy"><FaGithubSquare size={"2rem"} /></a>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;
