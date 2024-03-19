import { motion } from "framer-motion";

import TeamProfile from "../components/TeamProfile";
import leaderProfileDb from "../data/leaderProfileDb.json";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <main className="h-[fit-content] w-full bg-white pt-[50px] flex flex-col gap-[15px] ">
      <section className="h-[fit-content] w-full flex sm: flex-col md: flex-col lg:flex-row xl:flex-row">
        <div className=" pt-[70px] flex flex-col justify-center p-[12px] gap-y-[25px] sm: h-1/2 sm: w-full md: h-1/2 md: w-full lg:h-full lg:w-1/2 xl:h-full xl:w-1/2">
          <h1 className="text-[2rem] font-madimi-one">Who we are</h1>

          <p className="font-montserrat font-600 text-[1rem]">
            At Pampoint, we believe in redefining the way you manage your
            finances. With a commitment to innovation and customer satisfaction,
            we aim to provide you with seamless banking experiences that fit
            into your lifestyle.
          </p>

          <p className="font-montserrat font-600 text-[1rem]">
            Our mission is simple: to empower you with the tools and services
            you need to take control of your finances anytime, anywhere. Whether
            you're at home, at work, or on the go, we strive to make banking
            convenient, secure, and personalized to your needs.
          </p>

          <button className="p-[12px] text-white bg-[#f9a826] w-[fit-content] rounded-lg font-bold mt-[15px]">
            Join Today
          </button>
        </div>
        <div className=" flex justify-center items-center p-[12px] sm: h-1/2 sm: w-full md: h-1/2 md: w-full lg:h-full lg:w-1/2 xl:h-full xl:w-1/2">
          <img
            src="https://media.istockphoto.com/id/1413150733/photo/financial-advisor-or-lawyer-with-couple-explaining-options.jpg?s=612x612&w=0&k=20&c=J7f5CMmNj7EtLyF_DtpsOL0EkydNy7UhdJgdtw69CJw="
            alt=""
            className="h-full w-full rounded-xl"
          />
        </div>
      </section>

      <section className=" mt-[100px] h-[fit-content] w-full flex flex-col gap-y-[25px]">
        <h2 className="text-[2rem] font-madimi-one text-center">
          Meet Our Leader's
        </h2>

        <p className="text-center text-lg font-montserrat">
          Our team of leaders is dedicated to driving innovation, excellence,
          and customer satisfaction in everything we do
        </p>

        <motion.div className="flex flex-wrap items-center gap-[35px] justify-center ">
          {leaderProfileDb.map((team) => (
            <TeamProfile {...team} />
          ))}
        </motion.div>
      </section>
      <section className="mt-[100px] h-[fit-content] w-full bg-black flex  p-[12px] gap-[80px] justify-center py-[30px] [&>div>span>h3]:font-madimi-one [&>div>span>h5]:font-montserrat sm: flex-col md: flex-col lg:flex-row lg:justify-center lg:items-center lg:h-[200px] xl:flex-row xl:justify-center xl:items-center xl:h-[200px]   ">
        <div className="flex items-center gap-x-[30px]">
          <span className="h-[50px] w-[50px] bg-[#f9a826] text-black flex justify-center items-center rounded-lg">
            <i className="text-xl fa-solid fa-chart-pie"></i>
          </span>
          {/*  */}
          <span className="flex flex-col gap-y-[5px]">
            <h3 className="text-[1.2rem] text-white">$300 Million</h3>
            <h5 className="text-[0.8rem] text-[lightgrey]">
              Processed Monthly
            </h5>
          </span>
        </div>
        {/*  */}
        <div className="flex items-center gap-x-[30px]">
          <span className="h-[50px] w-[50px] bg-[#f9a826] text-black flex justify-center items-center rounded-lg">
            <i className="fa-solid fa-location-dot"></i>
          </span>
          {/*  */}
          <span className="flex flex-col gap-y-[5px]">
            <h3 className="text-[1.2rem] text-white">200+</h3>
            <h5 className="text-[0.8rem] text-[lightgrey]">
              Branches in Europe
            </h5>
          </span>
        </div>
        {/*  */}
        <div className="flex items-center gap-x-[30px]">
          <span className="h-[50px] w-[50px] bg-[#f9a826] text-black flex justify-center items-center rounded-lg">
            <i className="fa-solid fa-user"></i>
          </span>
          {/*  */}
          <span className="flex flex-col gap-y-[5px]">
            <h3 className="text-[1.2rem] text-white">5M+</h3>
            <h5 className="text-[0.8rem] text-[lightgrey]">Active Users</h5>
          </span>
        </div>
        {/*  */}
      </section>

      {/*  */} 

      <section className="sm: h-[fit-content] md: h-[fit-content] lg:h-[450px] xl:h-[450px] w-full gap-[50px] bg-[#f9a826] flex sm: flex-col md :flex-col lg:flex-row xl:flex-row ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay:0.3 }}
          className=" flex flex-col  justify-center items-center gap-y-[12px] sm: h-1/2 sm: w-full sm: p-[15px] md: h-1/2 md: w-full md: p-[15px] lg:h-full lg:w-1/2 lg:p-[50px] xl:h-full xl:w-1/2 xl:p-[50px]"
        >
          <h2 className="text-[black] font-bold font-madimi-one text-[2rem]">
            <span className="text-[#fff]">Passionate</span> people dedicated to
            redifining banking
          </h2>
          <p className="text-[#222]">
            Our diverse team brings together expertise from finance, technology,
            and design to create a seamless banking experience tailored to your
            needs.
          </p>
        </motion.div>

        <div className=" flex justify-center  items-center sm: h-1/2 sm: w-full md: h-1/2 md: w-full lg:h-full lg:w-1/2 xl:h-full xl:w-1/2">
          <img
           
            src="https://media.istockphoto.com/id/2050798678/photo/casual-business-meeting.jpg?s=612x612&w=0&k=20&c=zrgzYLbjT3xUtAArkk28AaVj_HLuReSIic2DQWX89Gc="
            alt=""
            className="h-full w-full "
          />
        </div>
      </section>
      <Footer/>
    </main>
  );
};

export default AboutUs;
