import { auth, signOut } from "@/auth";

const HomePage = async () => {
  const session = await auth();

  if (!session) {
    return <div>HomePage Nao logado</div>;
  }

  return (
    <div>
      {JSON.stringify(session)}

      <form
        action={async () => {
          "use server";

          await signOut({
            redirectTo: "/",
          });
        }}
      >
        <button type="submit">Sair</button>
      </form>
    </div>
  );
};

export default HomePage;
