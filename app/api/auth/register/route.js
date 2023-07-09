import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const { name, email, password } = await req.json();

  await connect();
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse(
      JSON.stringify({ error: "Email already exists. Please sign in." }),
      {
        status: 401,
        statusText: "Email already exists. Please sign in.",
      }
    );
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ name, email, password: hashPassword });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
