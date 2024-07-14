import { prismadb } from "@/lib/db";
import { auth } from "@/auth";
import Link from "next/link";
import formatDate from "@/utils/format-date";
import Image from "next/image";

import RatingStars from "../rating-stars";
import FormRating from "@/components/form-rating";
import { BookOpen, Bookmark, X } from "lucide-react";
import {
  CardBook,
  ModalContainer,
  ModalContent,
  RatingsContainer,
  UserRating,
} from "./style";

interface ModalProps {
  book_id?: string;
}

const Modal = async ({ book_id }: ModalProps) => {
  const book = await prismadb.book.findFirst({
    where: {
      id: book_id,
    },
    include: {
      ratings: {
        include: {
          user: true,
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
    },
  });

  const ratings = book?.ratings || [];

  const categoriesOnBooks =
    book?.categories.map((category) => category.category.name) || [];

  const mediaRate =
    ratings?.reduce((acc, curr) => acc + curr.rate, 0) / ratings?.length;

  const session = await auth();

  return (
    <ModalContainer>
      <ModalContent>
        <div className="close-button">
          <Link href={"/discover"}>
            <X color="#8D95AF" />
          </Link>
        </div>

        {/* Informações do livro */}
        <CardBook>
          <div className="book-data">
            <Image src={book?.cover_url!} height={242} width={172} alt="" />

            <div className="book-info">
              <span className="title">{book?.name}</span>
              <span className="author">{book?.author}</span>

              <div className="rating-stars">
                <RatingStars mediaRating={mediaRate} />
                <span>{book?.ratings?.length} avaliações</span>
              </div>
            </div>
          </div>
          <div className="book-description">
            <div className="category">
              <Bookmark size={24} color="#50B2C0" />
              <div className="column">
                <span className="label">Categoria</span>
                <span>{categoriesOnBooks.join(", ")}</span>
              </div>
            </div>
            <div className="pages">
              <BookOpen size={24} color="#50B2C0" />
              <div className="column">
                <span className="label">Páginas</span>
                <span>{book?.total_pages}</span>
              </div>
            </div>
          </div>
        </CardBook>

        {/* Formulário de avaliação */}
        <FormRating bookId={book_id!} session={session ?? null} />

        {/* Lista de avaliações */}
        <RatingsContainer>
          {ratings.map((rating) => (
            <UserRating key={rating.id}>
              <div className="user-info">
                <div className="user-avatar">
                  <Link href={`/profile/${rating?.user?.id}`}>
                    <div className="gradient-border">
                      <Image
                        src={rating?.user?.image!}
                        height={40}
                        width={40}
                        alt=""
                      />
                    </div>
                  </Link>
                  <div className="user-infos">
                    <span className="user-name">{rating?.user?.name}</span>
                    <span className="date">
                      {formatDate(rating.created_at)}
                    </span>
                  </div>
                </div>
                <div className="rating-stars">
                  <RatingStars mediaRating={rating.rate} />
                </div>
              </div>
              <div className="user-review">
                <span>{rating.description}</span>
              </div>
            </UserRating>
          ))}
        </RatingsContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
