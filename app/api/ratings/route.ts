import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { prismadb } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const session = await auth();

    const body = await req.json();

    const { rate, description, book_id } = body;

    if (!session) {
      return new NextResponse("Sem autorização", { status: 401 });
    }

    if (!session.user?.id) {
      return new NextResponse("Id do usuario é obrigatório", { status: 401 });
    }

    if (!rate) {
      return new NextResponse("Nota é obrigatória", { status: 400 });
    }

    if (!description) {
      return new NextResponse("Descrição é obrigatória", { status: 400 });
    }

    if (!book_id) {
      return new NextResponse("Id do livro é obrigatório", { status: 400 });
    }

    const userAlreadyRated = await prismadb.rating.findFirst({
      where: {
        user_id: session.user.id,
        book_id,
      },
    });

    if (userAlreadyRated) {
      return new NextResponse(
        "O usuário já fez uma avaliação para este livro",
        { status: 400 }
      );
    }

    const store = await prismadb.rating.create({
      data: {
        description,
        rate,
        book_id,
        user_id: session.user.id,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log(`[RATINGS_POST]`, error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
