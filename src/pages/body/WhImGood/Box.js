import { motion } from 'framer-motion'
import { slideDown } from "../../../Helpers/Animation";
function Box({ data }) {
  return data.map((e, i) => {
    return (
      <motion.div
        variants={slideDown}
        initial="hidden"
        animate="visible"
        transition={{
          ease: 'easeInOut',
          duration: 0.6,
          delay: i * 0.4,
        }}
        key={e.id}
        className={`box-${e.id} w-full lg:w-5/12 mb-5 p-10 text-left bg-third hover:bg-white hover:text-black  rounded transition duration-500 ease-in-out`}
      >
        <div>
          <img src={e.Icon} alt="icons" />
        </div>
        <h2 className="text-3xl font-bold mt-5 mb-3">{e.Name}</h2>
        <p>{e.Desc}</p>
      </motion.div>
    );
  });
}
export default Box;
