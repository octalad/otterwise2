import client from "../providers/client";

export const listAllPosts = () => client.get("posts");

export const createPost = (data) => client.post("posts", data);
