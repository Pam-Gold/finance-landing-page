import "../App.css";
import { motion } from "framer-motion";
import StoreButton from "../components/StoreButton";

// Illustrations
import appBg from "../assets/images/Home.png";
import appBg2 from "../assets/images/History.png";
import mobileFeature from "../assets/images/undraw_mobile_pay_re_sjb8.svg";
import transactionFeature from "../assets/images/undraw_online_transactions_-02-ka.svg";
import savingFeature from "../assets/images/undraw_investing_re_bov7.svg";
import authenticationFeature from "../assets/images/undraw_two_factor_authentication_namy.svg";

const Home = () => {
  return (
    <main className="h-[350vh] w-full bg-slate-900 pt-[50px]">
      <section className=" w-full bg-white flex sm: flex-col sm: h-[1200px] md: flex-col md: h-[1000px] lg:flex-row lg:h-[600px] xl:flex-row xl:h-[600px]">
        <div className="bg-white flex flex-col gap-x-[25px] p-[15px] sm: h-1/2 sm: w-full md :h-1/2 md: w-full lg:h-full lg:w-[60%] xl:h-full xl:w-[60%]">
          <h1 className="font-bold font-madimi-one sm: text-[2rem] md: text-[2.6rem] lg:text-[3rem] xl:text-[3.2rem]">
            Get Started with our intuitive platform that covers
            <div className="cta-animate-wrapper">
              <span>Online Banking.</span>
              <span>Saving.</span>
              <span>Security.</span>
              <span>Transfers.</span>
              <span>Accesibility.</span>
              <span>Online Banking.</span>
              {/* <span>Online Banking.</span> */}
            </div>
          </h1>
          {/*  */}

          <p className="sm: text-[16px] md: text-[21px] lg:text-[1.1rem] xl:text-[1.3rem] text-[dimgrey] mt-[45px] font-poppins font-madimi-one">
            Join our community of satisfied customers and experience banking
            that puts you first.
          </p>

          <div className="flex gap-x-[25px] items-center mt-[50px]">
            <StoreButton
              image="https://img.icons8.com/?size=48&id=L1ws9zn2uD01&format=png"
              store="Google Play"
              downloadTag="GET IT ON"
              link="https://play.google.com/store/apps?hl=en&gl=US&pli=1"
            />

            <StoreButton
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Apple_Store_logo.svg/512px-Apple_Store_logo.svg.png"
              store="App Store"
              downloadTag="Download on the"
              link="https://www.apple.com/app-store/"
            />
          </div>
        </div>
        <div className=" flex justify-center items-center sm: h-1/2 sm: w-full md: h-1/2 md: w-full lg:h-[100%] lg:w-[40%] xl:h-[100%] xl:w-[40%] ">
          <div className="p-[10px] h-[80%] relative">
            <motion.img
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              initial={{ scale: 0.6 }}
              src={appBg}
              alt=""
              className="h-full w-full shadow-md relative "
            />
            <motion.img
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              initial={{ scale: 0.6 }}
              src={appBg2}
              alt=""
              className="h-[80%] w-[200px] shadow-md absolute top-[25%] left-[70px] z-[20]"
            />
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, staggerChildren: 0.5 }}
        className="bg-[#000] p-[12px] py-[50px] gap-[35px] h-[fit-content] w-full flex flex-wrap justify-center items-center features"
      >
        <div className="h-[100px] w-[310px] bg-white flex items-center rounded-md justify-between p-[8px] gap-x-[20px]">
          <span className="h-[30px] w-[30px] rounded-[50%] bg-[#F9A826] text-white flex justify-center items-center ">
            <i className="fa-solid fa-credit-card"></i>
          </span>{" "}
          <h4 className="text-black text-[13.5px] font-bold font-roboto w-[250px]">
            Dicover our exclusive credit card offers & enjoy great rewards
          </h4>
        </div>
        {/*  */}
        <div className="h-[100px] w-[310px] bg-white flex items-center rounded-md justify-between p-[8px] gap-x-[20px]">
          <span className="h-[30px] w-[30px] rounded-[50%] bg-[#F9A826] text-white flex justify-center items-center">
            <i className="fa-solid fa-piggy-bank"></i>
          </span>{" "}
          <h4 className="text-black text-[13.5px] font-bold font-roboto w-[250px]">
            Start Saving more with our annual savings program
          </h4>
        </div>
        <div className="h-[100px] w-[310px] bg-white flex items-center rounded-md justify-between p-[8px] gap-x-[20px]">
          <span className="h-[30px] w-[30px] rounded-[50%] bg-[#F9A826] text-white flex justify-center items-center">
            <i className="fa-solid fa-network-wired"></i>
          </span>{" "}
          <h4 className="text-black font-bold text-[13.5px] font-roboto w-[250px]">
            Payment Integration with multiple popular Saas applications
          </h4>
        </div>
      </motion.section>

      <section className="w-full bg-white p-[12px] flex justify-between items-center sm: flex-col sm: h-[fit-content] md: flex-col md: h-[fit-content] lg:flex-row lg:h-[600px]  xl:flex-row xl:h-[600px] ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className=" flex flex-col gap-y-[35px] h-[350px] p-[12px] w-350px sm: w-full md: w-full"
        >
          <h1 className="text-[2rem] text-black font-madimi-one">01</h1>
          <h3 className="text-lg text-[#111] font-bold font-madimi-one">
            Registration/Login
          </h3>
          <p className="text-md text-[dimgrey] font-bold font-madimi-one">
            You'll need to register or login by providing your account details &
            personal information.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className=" flex flex-col gap-y-[35px] h-[350px] p-[12px] w-350px sm: w-full md: w-full"
        >
          <h1 className="text-[2rem] text-black font-madimi-one">02</h1>
          <h3 className="text-lg text-[#111] font-bold font-madimi-one">
            Verification
          </h3>
          <p className="text-md text-[dimgrey] font-bold font-madimi-one">
            Some Banks may require additional verification steps, such as
            confirming your identity through SMS, Email or Face Id
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className=" flex flex-col gap-y-[35px] h-[350px] p-[12px] w-350px sm: w-full md: w-full"
        >
          <h1 className="text-[2rem] text-black font-madimi-one">03</h1>
          <h3 className="text-lg text-[#111] font-bold font-madimi-one">
            Account Linking
          </h3>
          <p className="text-md text-[dimgrey] font-bold font-madimi-one">
            Link your bank accounts to the app by providing the necessary
            information, such as your account number & any security codes
            provided by your bank.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className=" flex flex-col gap-y-[35px] h-[350px] p-[12px] w-350px sm: w-full md: w-full"
        >
          <h1 className="text-[2rem] text-black font-madimi-one">04</h1>
          <h3 className="text-lg text-[#111] font-bold font-madimi-one">
            You are good to go
          </h3>
          <p className="text-md text-[dimgrey] font-bold font-madimi-one">
            Setup any additional security features such as fingerprint or face
            id & start using the app to manage your finances conveniently from
            your mobile device.
          </p>
        </motion.div>
      </section>
      <section className="h-[fit-content] w-full bg-black flex flex-col justify-between gap-y-[25px] p-[12px]">
        <h2 className="text-lg font-bold font-madimi-one text-white text-center mt-[20px]">
          Trusted by nearly 9500+ customers
        </h2>

        <motion.div
          initial={{ scale: 1 }}
          whileInView={{ scale: 0.8 }}
          transition={{ duration: 0.6 }}
          className="h-[fit-content] py-[50px] w-full   flex flex-wrap justify-center items-center gap-[40px]"
        >
          <div className="h-[100px] w-[120px]  flex justify-center items-center p-[8px]">
            <img
              src="https://companieslogo.com/img/orig/V.D-e36aebe0.png?t=1633206554"
              alt=""
            />
          </div>
          <div className="h-[100px] w-[120px]  flex justify-center items-center p-[8px]">
            <img
              src="https://companieslogo.com/img/orig/PYPL_BIG.D-29b40994.png?t=1633695449"
              alt=""
            />
          </div>
          <div className="h-[100px] w-[120px]  flex justify-center items-center p-[8px]">
            <img
              src="https://companieslogo.com/img/orig/SONY_BIG.D-d0326972.png?t=1633223557"
              alt=""
            />
          </div>
          <div className="h-[100px] w-[120px]  flex justify-center items-center p-[8px]">
            <img
              src="https://companieslogo.com/img/orig/NWBI_BIG.D-2b5d9849.png?t=1672289764"
              alt=""
            />
          </div>
          <div className="h-[100px] w-[120px]  flex justify-center items-center p-[8px]">
            <img
              src="https://companieslogo.com/img/orig/META_BIG.D-db66a9c7.png?t=1654568366"
              alt=""
            />
          </div>
          <div className="h-[100px] w-[120px]  flex justify-center items-center p-[8px]">
            <img
              src="https://companieslogo.com/img/orig/COIN_BIG.D-9462861a.png?t=1648737284"
              alt=""
            />
          </div>
        </motion.div>
      </section>

<div className="flex flex-col h-[fit-content] w-full gap-y-[25px]">
  
<section className="h-[600px] w-full p-[12px]  bg-white flex justify-between items-center  sm: flex-col md: flex-col lg:flex-row xl:flex-row ">
        <div className="flex flex-col justify-center  gap-y-[35px] sm: h-[50%] sm: w-[100%] md: h-[50%] md: h-[50%] md: w-[100%] lg:h-[100%] lg:w-[50%] xl:h-[100%] xl:w-[50%]">
          <h2 className="font-bold text-[1.4rem] sm: text-[1.2rem]">
            Bank Anywhere, Anytime: Download Our Mobile App Now!
          </h2>
          <p className="font-bold text-[grey] text-[16px] sm: text-[14px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum et
            molestias dignissimos autem facere? Ipsa, doloremque. Inventore esse
            unde ratione.
          </p>

          <a href="" className="font-bold text-line">
            Read More
          </a>
        </div>

        {/*  */}
        <div className="flex  items-center p-[8px] gap-y-[35px] sm: justify-center md: justify-center  lg:justify-end xl:justify-end sm: h-[50%] sm: w-[100%] md: h-[50%] md: h-[50%] md: w-[100%] lg:h-[100%] lg:w-[50%] xl:h-[100%] xl:w-[50%]">
          <motion.div
            className="h-[300px] w-[300px] rounded-[50%]"
            initial={{ x: -80 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            <img src={mobileFeature} alt="" className="h-full w-full " />
          </motion.div>
        </div>
      </section>
      {/*  */}
      <section className="h-[600px] w-full p-[12px]  bg-white flex justify-between items-center  sm: flex-col-reverse md: flex-col-reverse lg:flex-row-reverse xl:flex-row-reverse ">
        <div className="flex flex-col justify-center  gap-y-[35px] sm: h-[50%] sm: w-[100%] md: h-[50%] md: h-[50%] md: w-[100%] lg:h-[100%] lg:w-[50%] xl:h-[100%] xl:w-[50%]">
          <h2 className="font-bold text-[1.4rem] sm: text-[1.2rem]">
          Effortless Transactions: Manage Your Finances with Ease – Start Now!
          </h2>
          <p className="font-bold text-[grey] text-[16px] sm: text-[14px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum et
            molestias dignissimos autem facere? Ipsa, doloremque. Inventore esse
            unde ratione.
          </p>

          <a href="" className="font-bold text-line">
            Read More
          </a>
        </div>

        {/*  */}
        <div className="flex  items-center p-[8px] gap-y-[35px] sm: justify-center md: justify-center  lg:justify-center xl:justify-center sm: h-[50%] sm: w-[100%] md: h-[50%] md: h-[50%] md: w-[100%] lg:h-[100%] lg:w-[50%] xl:h-[100%] xl:w-[50%]">
          <motion.div
            className="h-[300px] w-[300px] rounded-[50%]"
            initial={{ scale:0.6 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            <img src={transactionFeature} alt="" className="h-full w-full " />
          </motion.div>
        </div>
      </section>
      {/*  */}

<section className="h-[600px] w-full p-[12px]  bg-white flex justify-between items-center  sm: flex-col md: flex-col lg:flex-row xl:flex-row ">
        <div className="flex flex-col justify-center  gap-y-[35px] sm: h-[50%] sm: w-[100%] md: h-[50%] md: h-[50%] md: w-[100%] lg:h-[100%] lg:w-[50%] xl:h-[100%] xl:w-[50%]">
          <h2 className="font-bold text-[1.4rem] sm: text-[1.2rem]">
          Grow Your Wealth: Discover Our Savings Solutions Today!
          </h2>
          <p className="font-bold text-[grey] text-[16px] sm: text-[14px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum et
            molestias dignissimos autem facere? Ipsa, doloremque. Inventore esse
            unde ratione.
          </p>

          <a href="" className="font-bold text-line">
            Read More
          </a>
        </div>

        {/*  */}
        <div className="flex  items-center p-[8px] gap-y-[35px] sm: justify-center md: justify-center  lg:justify-end xl:justify-end sm: h-[50%] sm: w-[100%] md: h-[50%] md: h-[50%] md: w-[100%] lg:h-[100%] lg:w-[50%] xl:h-[100%] xl:w-[50%]">
          <motion.div
            className="h-[300px] w-[300px] rounded-[50%]"
            initial={{ x: -80 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            <img src={savingFeature} alt="" className="h-full w-full " />
          </motion.div>
        </div>
      </section>
      {/*  */}
      <section className="h-[600px] w-full p-[12px]  bg-white flex justify-between items-center  sm: flex-col-reverse md: flex-col-reverse lg:flex-row-reverse xl:flex-row-reverse ">
        <div className="flex flex-col justify-center  gap-y-[35px] sm: h-[50%] sm: w-[100%] md: h-[50%] md: h-[50%] md: w-[100%] lg:h-[100%] lg:w-[50%] xl:h-[100%] xl:w-[50%]">
          <h2 className="font-bold text-[1.4rem] sm: text-[1.2rem]">
          Protect Your Finances: Activate Secure Authentication Now!
          </h2>
          <p className="font-bold text-[grey] text-[16px] sm: text-[14px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum et
            molestias dignissimos autem facere? Ipsa, doloremque. Inventore esse
            unde ratione.
          </p>

          <a href="" className="font-bold text-line">
            Read More
          </a>
        </div>

        {/*  */}
        <div className="flex  items-center p-[8px] gap-y-[35px] sm: justify-center md: justify-center  lg:justify-center xl:justify-center sm: h-[50%] sm: w-[100%] md: h-[50%] md: h-[50%] md: w-[100%] lg:h-[100%] lg:w-[50%] xl:h-[100%] xl:w-[50%]">
          <motion.div
            className="h-[300px] w-[300px] rounded-[50%]"
            initial={{ scale:0.6 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            <img src={authenticationFeature} alt="" className="h-full w-full " />
          </motion.div>
        </div>
      </section>
      {/*  */}
</div>
    </main>
  );
};

export default Home;
