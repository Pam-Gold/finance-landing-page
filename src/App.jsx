import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogDetails from "./components/BlogDetails";

const pamsRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="blog" element={<Blog />}/>
        <Route path="blog/:id" element={<BlogDetails  />} />

    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={pamsRouter} />
    </>
  );
}

export default App;
