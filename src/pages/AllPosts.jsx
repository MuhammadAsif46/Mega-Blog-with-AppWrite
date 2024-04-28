import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/appConfig";
import { Container, PostCard } from "../components";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  appwriteService.getAllPost([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });
  return (
    <div className="py-8 w-full">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
