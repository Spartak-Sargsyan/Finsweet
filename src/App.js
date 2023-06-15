import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import BlogPage from "./components/BlogPage/BlogPage";
import { RouteCostant } from "./constants/routeCostant";
import BlogPostPage from "./components/BlogPostPage/BlogPostPage";
import Catagory from "./components/CatagoryPage/Catagory";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={RouteCostant.home} element={<HomePage/>}/>
        <Route path={RouteCostant.blog} element={<BlogPage/>}/>
        <Route path={RouteCostant.blogPost} element={<BlogPostPage/>}/>
        <Route path={RouteCostant.catagory} element={<Catagory/>}/>
      </Routes>
    </div>
  );
}
export default App;
