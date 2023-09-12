import User from "@/libs/models/user.model";

export async function getUserByEmail({
  email,
}: {
  email: string | undefined | null;
}) {
  const user = await User.findOne({ email });

  if (!user) throw new Error("Email does not exist!");

  return { ...user._doc, _id: user._id.toString() };
}
