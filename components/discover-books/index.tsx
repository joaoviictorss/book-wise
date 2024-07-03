"use client";

import { Book } from "@/types";
import BookCard from "../ui/book-card";
import Tag from "../ui/tag";
import { useState } from "react";
import { TitlePage } from "@/app/(protected)/discover/style";
import { BookHeart } from "lucide-react";
import Input from "../ui/input";
import { Category } from "@prisma/client";

interface DiscoverBooksProps {
  books: Book[];
  categories: Category[];
}

const DiscoverBooks = ({ books, categories }: DiscoverBooksProps) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleFilterSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  const filteredBooksByCategory = selectedCategory
    ? books.filter((book) =>
        book.categories?.some(
          (category) => category.categoryId === selectedCategory
        )
      )
    : books;

  const filteredBooks = filteredBooksByCategory.filter((book) =>
    book.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <>
      <div className="title">
        <TitlePage>
          <BookHeart color="#50B2C0" size={32} />
          Explorar
        </TitlePage>
        <Input value={searchFilter} onChange={handleFilterSearch} />
      </div>

      <div className="categories">
        <Tag
          tagName="Tudo"
          isSelected={selectedCategory === ""}
          onClick={() => setSelectedCategory("")}
        />
        {categories.map((category) => (
          <Tag
            key={category.id}
            tagName={category.name}
            isSelected={selectedCategory === category.id}
            value={category.id}
            onClick={() => setSelectedCategory(category.id)}
          />
        ))}
      </div>

      <div className="books">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} ratings={book.ratings!} />
          ))
        ) : (
          <p>Nenhum livro encontrado</p>
        )}
      </div>
    </>
  );
};

export default DiscoverBooks;
