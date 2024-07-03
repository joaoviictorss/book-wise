import { prismadb } from "@/lib/db";
import { Container } from "./style";
import DiscoverBooks from "@/components/discover-books";
import Modal from "@/components/ui/modal";

interface DiscoverPageProps {
  searchParams: {
    book: string;
    modal: string;
  };
}

const DiscoverPage = async ({ searchParams }: DiscoverPageProps) => {
  const books = await prismadb.book.findMany({
    include: {
      ratings: true,
      categories: true,
    },
  });

  const categories = await prismadb.category.findMany();

  const showModal = searchParams.modal === "true";
  const bookId = searchParams.book;

  return (
    <>
      <Container>
        <DiscoverBooks books={books} categories={categories} />
      </Container>
      {showModal && <Modal book_id={bookId} />}
    </>
  );
};

export default DiscoverPage;
