

import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page") ?? "1", 10);
    const cat = searchParams.get("cat") ?? undefined;

    const POST_PER_PAGE = 2;

    const query = {
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
      where: {
        ...(cat ? { catId: cat } : {}), // giờ Prisma hiểu vì có catSlug trong model
      },
      orderBy: {
        createdAt: "desc" as const,
      },
    };

    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);

    return NextResponse.json(
      { posts, count, page, totalPages: Math.ceil(count / POST_PER_PAGE) },
      { status: 200 }
    );
  } catch (err) {
    console.error("❌ API Error:", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};



// CREATE A POST
export const POST = async (req: NextRequest) => {
 
};