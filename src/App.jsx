import BlogContent from "./pages/BlogContent";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";

function App() {
  let { loading, error, data } = useFetch(
    "http://localhost:1337/api/blogs?popular=*"
  );
  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>Error ...</h1>;

  console.log(data);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<BlogContent />} />
      </Routes>
    </div>
  );
}

export default App;
