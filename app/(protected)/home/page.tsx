import { auth, signOut } from "@/auth";
import { HomeContainer } from "./style";
import BookCard from "@/components/ui/book-card";
import { prismadb } from "@/lib/db";
import CardBookSecondary from "@/components/ui/book-card-secondary";
import BookCardSecondary from "@/components/ui/book-card-secondary";
import { Book } from "@/types";

const HomePage = async () => {
  const session = await auth();

  if (!session) {
    return <div>HomePage Nao logado</div>;
  }

  const books = await prismadb.book.findMany({
    include: {
      ratings: true,
    },
  });

  return (
    <HomeContainer>
      <div>
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
      <div>
        <div className="books"></div>
      </div>
    </HomeContainer>
  );
};

export default HomePage;
