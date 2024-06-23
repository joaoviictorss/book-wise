import { prismadb } from "@/lib/db";
import { Container, TitlePage } from "./style";
import { BookHeart } from "lucide-react";
import Input from "@/components/ui/input";
import Tag from "@/components/ui/tag";
import BookCardSecondary from "@/components/ui/book-card-secondary";
import DiscoverBooks from "@/components/discover-books";

const DiscoverPage = async () => {
  const books = await prismadb.book.findMany({
    include: {
      ratings: true,
      categories: true,
    },
  });

  const categories = await prismadb.category.findMany()

  const categoriesOnBooks = await prismadb.categoriesOnBooks.findMany({});

  console.log(books);

  return (
    <Container>
      <DiscoverBooks books={books} categories={categories} />
    </Container>
  );
};

export default DiscoverPage;
