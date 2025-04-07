import mongoose from "mongoose";
import { User } from "../models/user";
import { log } from "console";
import { Context } from "../graphql/graphql";

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

export const GetUsersId = async (
  parent: any,
  arg: { id: String },
  context: Context
) => {
  console.log(context);
  return await User.findById(arg.id);
};

type UserType = {
  name: string;
  email: string;
  password: string;
};

type UserUpdateType = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export const addUser = async (
  _: unknown,
  { name, email, password }: UserType
) => {
  try {
    const data = { name, email, password };
    return await User.insertOne(data);
  } catch (error) {
    console.error("Error adding user:", error);
    throw new Error("Failed to add user");
  }
};
export const UpdateUserById = async (
  _: unknown,
  { id, name, email, password }: UserUpdateType
) => {
  return await User.findByIdAndUpdate(
    id,
    { name, email, password },
    { new: true }
  );
};

export const deleteUserById = async (_: unknown, { id }: { id: string }) => {
  return await User.findByIdAndDelete(id);
};
