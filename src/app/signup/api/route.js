import { connectDB } from "@/lib/connectDB";
const bcrypt = require('bcrypt');

export const POST = async (request) => {
  const newUser = await request.json()
  try {
    const db = await connectDB();
    const userCollection = await db.collection("users");
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return Response.json(
        { message: "Email Already registered" },
        { status: 304 }
      );
    }

    const hashPassword = bcrypt.hashSync(newUser.password, 14);
    const result = await userCollection.insertOne({...newUser, password: hashPassword});
    return Response.json({ message: "User Created" }, result, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Something Went Wrong" }, { status: 500 });
  }
};
