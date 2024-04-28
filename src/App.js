import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"

export default function App() {
  // apanane aa API jya thi Data lave che te function j jagiyaye hoy te jagiya ahiya uesContext HOOK ma lakhvi padshe pachi j API ne call thashe useEffect HOOk thi
  const {fetchBlogPosts} = useContext(AppContext);

  // API ne call kariyu
  useEffect(() => {
    fetchBlogPosts();
  },[]);

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );

}
