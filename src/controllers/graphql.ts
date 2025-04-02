import mongoose from "mongoose";
import { User } from "../models/user";
import { log } from "console";

export const helloWord = () => "Hello, World!";

type Post = {
  title: string;
  content: string;
};
export const newPost = (_: unknown, { title, content }: Post) => {
  return { title, content };
};

export const getUsers = async () => {
  const user = await User.find();
  console.log(user);
  return user;
};
