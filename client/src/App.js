import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MdPostAdd } from "react-icons/md";
import Home from "./components/home/Home";
import CreatePost from "./components/createPost/CreatePost";
import Post from "./components/post/Post";
import Paywall from "./components/paywall/Paywall";

function App() {
  let navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  const navigateCreatePost = () => {
    navigate("/createpost");
  };

  return (
    <div>
      <nav>
        <h2 className="navTitle" onClick={navigateHome}>
          Lightning Blog
        </h2>
        <div className="cpLayout" onClick={navigateCreatePost}>
          <MdPostAdd className="cpIcon" />
          <h4 className="navCP">Create post</h4>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/paywall" element={<Paywall />} />
      </Routes>
    </div>
  );
}

export default App;
