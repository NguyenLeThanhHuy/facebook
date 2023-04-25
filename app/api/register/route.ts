import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
   const body = await request.json();
   const { firstname, lastname, email, password, birthday, sex } = body;

   const hashedPassword = await bcrypt.hash(password, 12);

   const user = await prisma.user.create({
      data: {
         firstname,
         lastname,
         email,
         hashedPassword,
         birthday: new Date(birthday),
         sex,
      },
   });

   return NextResponse.json(user);
}
