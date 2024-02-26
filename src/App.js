import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css";
// eslint-disable-next-line
export default function App() {
  // eslint-disable-next-line
  const {fetchBlogPosts} = useContext(AppContext);
  // eslint-disable-next-line
  useEffect(() => {
    // eslint-disable-next-line
    fetchBlogPosts();
    // eslint-disable-next-line
  },[]);
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center"> 
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
}
