import { useUser } from "@clerk/clerk-react";
import HeroSection from "../components/HeroSection";
import CardsCollection from "../components/CardsCollection";

const HomePage = () => {
    const { user } = useUser();

    return (
        <>
            <HeroSection />
            <CardsCollection />
        </>
    );
};

export default HomePage;
