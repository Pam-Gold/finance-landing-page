import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-[500px] w-full justify-between  p-[15px] bg-black text-[grey] flex sm: flex-col  md: flex-col lg:flex-row lg:items-center xl:flex-row xl:items-center">
      <section>
        <img
          src="https://pamgold-financev1.netlify.app/assets/pamgold-logo-B1Og_3T6.png"
          alt=""
          className="h-[50px] w-[50px]"
        />

        <ul>
          <h4>Company</h4>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link>Blogs</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
        </ul>
      </section>
      {/*  */}
      <section>
        <ul>
          <h4>Resources</h4>
          <li>
            <Link>Privacy Policy</Link>
          </li>
          <li>
            <Link>Terms & Conditions</Link>
          </li>
          <li>
            <Link>Security</Link>
          </li>
        </ul>
      </section>
      {/*  */}
      <section>
        <ul>
          <h4>Discover</h4>
          <li>
            <Link>Personal</Link>
          </li>
          <li>
            <Link>Discover</Link>
          </li>
         
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
