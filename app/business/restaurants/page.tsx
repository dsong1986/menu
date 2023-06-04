import Container from "@/app/components/Container"
import getCurrentUser from "@/app/components/actions/getCurrentUser";
import { poppins400 } from "@/app/styles/fonts";
import axios from "axios";
import Link from "next/link";
import AddRestaurant from "./addRestaurant";

export default async function RestaurantHomePage() {
    const currentUser = await getCurrentUser();

    return (
        <Container>
            <div className=" text-3xl font-bold py-8">
                <div className={poppins400.className}>
                    Welcome, {currentUser?.name}
                </div>
            </div>
            <AddRestaurant 
                currentUser={currentUser}
            />
           
        </Container>
    )
}