import "./Home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("http://localhost:3333/posts");
      const data = await res.json();
      const posts = [...data].reverse();
      setPostList(posts);
    };

    getPosts();
  }, []);

  let navigate = useNavigate();

  const navigatePost = (post) => {
    navigate(`/post/${post.id}`, {
      state: {
        post,
      },
    });
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div
            className="post"
            key={post.id}
            onClick={() => navigatePost(post)}
          >
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
            </div>
            <div className="postsText"> {post.postText} </div>
            {post.paywall ? <h4>Premium content</h4> : <h4>Free content</h4>}
          </div>
        );
      })}
    </div>
  );
}

export default Home;