import UsersRatings from "@/components/users-ratings";
import { Container } from "./style";
import { prismadb } from "@/lib/db";

const HomePage = async () => {
  const ratings = await prismadb.rating.findMany({
    include: {
      user: true,
      book: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  const popularBooks = await prismadb.book.findMany({
    take: 4,
    include: {
      ratings: true,
      categories: true,
    },
  });

  return (
    <Container>
      <UsersRatings ratings={ratings} popularBooks={popularBooks} />
    </Container>
  );
};

export default HomePage;
