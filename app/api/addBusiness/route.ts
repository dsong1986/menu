import { NextResponse } from "next/server";


import bcrypt from 'bcrypt'
import prisma from "@/app/libs/prismadb"

export async function POST(
    request: Request,
) {
    const body = await request.json();
    const {
        currentUser
    } = body;

    console.log(currentUser);

    try {
        const businessCount = await prisma.business.count();

        const businessId = (100000000 + businessCount).toString();
        console.log(businessId);


        const business = await prisma.business.create({
            data: {
                bId: businessId,
                user: {
                    connectOrCreate: {
                        where: {
                            id: currentUser.id
                        },
                        create: {
                            email: currentUser.email,
                            name: currentUser.name,
                            hashedPassword: currentUser.hashedPassword,
                        }
                    }
                },
            }
        });

        return NextResponse.json(business);
    } catch (err) {
        return NextResponse.json({ error: err })
    }
}