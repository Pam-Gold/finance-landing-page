import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-[fit-content] w-full bg-black text-[grey]  p-[15px]">
      <Link to="/">
        <img
          src="https://pamgold-financev1.netlify.app/assets/pamgold-logo-B1Og_3T6.png"
          alt=""
          className="h-[50px] w-[50px] mb-[35px]"
        />
      </Link>
        <div className="justify-between gap-[25px]   flex sm: flex-col  md: flex-col lg:flex-row xl:flex-row">

       
      <section>

        <ul className="flex flex-col gap-y-[12px]">
          <h4 className="text-white font-bold font-montserrat text-[1.2rem]">Company</h4>
          <li>
            <Link to="about">About Us</Link>
          </li>
          <li>
            <Link to="blog">Blogs</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
        </ul>
      </section>
      {/*  */}
      <section>
        <ul className="flex flex-col gap-y-[12px]">
          <h4 className="text-white font-bold font-montserrat text-[1.2rem]">Resources</h4>
          <li>
            <Link>Privacy Policy</Link>
          </li>
          <li>
            <Link>Terms</Link>
          </li>
          <li>
            <Link>Security</Link>
          </li>
        </ul>
      </section>
      {/*  */}
      <section>
        <ul className="flex flex-col gap-y-[12px]">
          <h4 className="text-white font-bold font-montserrat text-[1.2rem]">Discover</h4>
          <li>
            <Link>Personal</Link>
          </li>
          <li>
            <Link>Business</Link>
          </li>
        </ul>
      </section>
      </div>

      <h4 className="mt-[30px] text-[14px] text-[#555]">&copy; PamGold.Dev 2024</h4>
    </footer>
  );
};

export default Footer;
