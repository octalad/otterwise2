import client from "../providers/client";

export const listAllPosts = (params) => client.get("posts", { params });

export const createPost = (data) => client.post("posts", data);

export const getPost = (id) => client.get(`/posts/${id}`);
