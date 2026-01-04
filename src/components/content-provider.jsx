import { createContext, useContext, useEffect, useState } from "react";
import defaultProfile from "../database/profile.json";
import PropTypes from "prop-types";

const ContentContext = createContext();

const STORAGE_KEY_PROFILE = "gabut_profile";
const STORAGE_KEY_POSTS = "gabut_posts";

export function ContentProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
    return saved ? JSON.parse(saved) : defaultProfile;
  });

  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY_POSTS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_POSTS, JSON.stringify(posts));
  }, [posts]);

  const updateProfile = (newData) => {
    setProfile((prev) => ({ ...prev, ...newData }));
  };

  const addPost = (post) => {
    const newPost = {
      ...post,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  const updatePost = (id, updatedData) => {
    setPosts((prev) =>
      prev.map((post) => (post.id === id ? { ...post, ...updatedData } : post))
    );
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <ContentContext.Provider
      value={{
        profile,
        posts,
        updateProfile,
        addPost,
        updatePost,
        deletePost,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

ContentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};
