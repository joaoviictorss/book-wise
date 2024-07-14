import { auth } from "@/auth";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/home");
  }

  return <div>teste</div>;
};

export default ProfilePage;
