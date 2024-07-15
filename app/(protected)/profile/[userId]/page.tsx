import {
  AnalyticsContainer,
  AnalyticsUserData,
  AnalyticsUserInfos,
  Container,
  DataContainer,
  ProfilePageContainer,
  TitlePage,
} from "./style";
import { Book, Bookmark, BookUser, Library, User } from "lucide-react";
import Image from "next/image";
import { prismadb } from "@/lib/db";
import formatDate from "@/utils/format-date";
import ProfileRatings from "@/components/profile-ratings";
import { redirect } from "next/navigation";

const ProfilePage = async ({ params }: { params: { userId: string } }) => {
  const userRatings = await prismadb.rating.findMany({
    where: {
      user_id: params.userId,
    },
    include: {
      book: {
        include: {
          categories: {
            include: {
              category: true,
            },
          },
        },
      },
      user: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  if (!userRatings) {
    redirect("/home");
  }

  const userData = userRatings.map((rating) => rating.user);

  const pagesRead = userRatings.reduce(
    (acc, curr) => acc + curr.book.total_pages,
    0
  );
  const booksRated = userRatings.length;
  const authors = userRatings.map((rating) => rating.book.author);
  const uniqueAuthors = authors.filter(
    (value, index, array) => array.indexOf(value) === index
  );
  const authorsCount = uniqueAuthors.length;

  const totalGenresBooks = userRatings.map((rating) => rating.book);
  const genres = totalGenresBooks
    .map((book) => book.categories.map((category) => category.category))
    .flat();

  const genreNumbers = genres
    .reduce((acc: any, genre) => {
      const qtd = genres.filter((i: any) => i.id === genre.id).length;
      return [
        ...acc,
        {
          ...genre,
          qtd,
        },
      ];
    }, [])
    .sort((a: any, b: any) => b.qtd - a.qtd);

  const bestGenre = genreNumbers[0] ? genreNumbers[0] : null;

  return (
    <ProfilePageContainer>
      <div>
        <TitlePage>
          <User size={32} color="#50B2C0" />
          Perfil
        </TitlePage>

        <Container>
          <ProfileRatings userRatings={userRatings} />
          <AnalyticsContainer>
            <AnalyticsUserInfos>
              <div className="gradient-border">
                <Image
                  src={userData[0]?.image!}
                  width={72}
                  height={72}
                  alt=""
                />
              </div>
              <div className="user-infos">
                <h2>{userData[0]?.name!}</h2>
                <span>Membro desde {formatDate(userData[0]?.createdAt!)}</span>
              </div>
            </AnalyticsUserInfos>

            <div className="separator" />

            <AnalyticsUserData>
              <DataContainer>
                <Book size={32} color="#50B2C0" />
                <div className="data">
                  <span className="quantity">{pagesRead}</span>
                  <span className="tag">Páginas lidas</span>
                </div>
              </DataContainer>

              <DataContainer>
                <Library size={32} color="#50B2C0" />
                <div className="data">
                  <span className="quantity">{booksRated}</span>
                  <span className="tag">Livros avaliados</span>
                </div>
              </DataContainer>

              <DataContainer>
                <BookUser size={32} color="#50B2C0" />
                <div className="data">
                  <span className="quantity">{authorsCount}</span>
                  <span className="tag">Autores lidos</span>
                </div>
              </DataContainer>

              <DataContainer>
                <Bookmark size={32} color="#50B2C0" />
                <div className="data">
                  <span className="quantity">{bestGenre?.name}</span>
                  <span className="tag">Categoria mais lida</span>
                </div>
              </DataContainer>
            </AnalyticsUserData>
          </AnalyticsContainer>
        </Container>
      </div>
    </ProfilePageContainer>
  );
};

export default ProfilePage;
