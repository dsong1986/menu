'use client'
import Container from "../Container";
import UserMenu from "./UserMenu";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ShoppingCart from "./ShoppingCart";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className=" bg-white border-gray-200 shadow-lg ">
            <Container>
                <div className="               
                    max-w-screen-xl 
                    flex 
                    flex-wrap
                    items-center 
                    justify-between 
                    mx-auto 
                    py-3
                 ">
                    <Logo />
                    <SearchBar />
                    <UserMenu />
                </div>
            </Container>
        </div>
    )
}

export default Navbar;