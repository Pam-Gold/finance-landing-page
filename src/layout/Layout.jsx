import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar";

const  Layout = () => {
  return(
    <main>
    <Navbar/>
      <section>
        <Outlet/>
      </section>
    </main>
  )
}

export default Layout;