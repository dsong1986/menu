import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb"


export async function PUT(
    request: Request,

) {

    const body = await request.json();


    var keys = Object.keys(body);
    const field = keys[0];
    const value = body[keys[0]]
    const { userEmail } = body;

    try {
        const updateUser = await prisma.user.findUnique({
            where: {
                email: userEmail,
            }
        })

        if (!updateUser) {
            return NextResponse.json("email not exists");
        }

        if (field === 'name') {
            const updateUserInfo = await prisma.user.update({
                where: {
                    email: userEmail,
                },
                data: {
                    name: value,
                },
            })
         
            
            return NextResponse.json(updateUserInfo)
        }
        else if (field === 'email') {
            const newUserEmail = await prisma.user.findUnique({
                where: {
                    email: value,
                }
            })
            if (newUserEmail) {
                return NextResponse.json("email already exists, please change");
            }
            const updateUserInfo = await prisma.user.update({
                where: {
                    email: userEmail,
                },
                data: {
                    email: value,
                },
            })
            return NextResponse.json({status: 200})
        }
    } catch (err) {
        return NextResponse.json({ error: err })
    }
}