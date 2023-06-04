import Container from "@/app/components/Container"
import { poppins400, notoSans700 } from "@/app/styles/fonts";
import InfoCard from "./InfoCard";
import getCurrentUser from "@/app/components/actions/getCurrentUser";
import Link from "next/link";

export default async function PersonalInfo() {
    const currentUser = await getCurrentUser();

    return (


        <Container>
            <div className={poppins400.className}>

                {/* Navigation */}
                <div className="flex flex-row gap-4 pt-6 pb-2 items-center text-sm">
                    <Link href="/customer/account">Account</Link>
                    <h1 className="text-neutral-500 text-xl font-light"> 	&#62; </h1>
                    <div>Personal info</div>
                </div>


                <div className={notoSans700.className}>
                    <div className="text-3xl font-semibold text-neutral-700">Personal Info</div>
                </div>

                <div className="pt-12 flex flex-col gap-4 md:w-2/3">
                    <InfoCard
                        userEmail={currentUser?.email?.toString()}
                        id="name"
                        label="Full Name"
                        desc="This is the name on your travel document, which could be a license or a passport."
                        content={currentUser?.name?.toString()}

                    />
                    <hr />
                    <InfoCard
                        userEmail={currentUser?.email?.toString()}
                        id="email"
                        label="Email Address"
                        content={currentUser?.email?.toString()}
                    />
                </div>
            </div>
        </Container>
    )
}