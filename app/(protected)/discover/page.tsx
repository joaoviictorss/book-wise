import { prismadb } from "@/lib/db";
import { Container } from "./style";
import DiscoverBooks from "@/components/discover-books";

const DiscoverPage = async () => {
  const books = await prismadb.book.findMany({
    include: {
      ratings: true,
      categories: true,
    },
  });

  const categories = await prismadb.category.findMany();

  return (
    <Container>
      <DiscoverBooks books={books} categories={categories} />
    </Container>
  );
};

export default DiscoverPage;
