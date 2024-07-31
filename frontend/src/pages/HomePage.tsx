import { useUser } from "@clerk/clerk-react";
import HeroSection from "../components/HeroSection";
import CardsCollection from "../components/CardsCollection";

const HomePage: React.FC = () => {
    const { user } = useUser();

    return (
        <div className="home">
            <div className="container">
                <HeroSection />
                <CardsCollection />
            </div>
        </div>
    );
};

export default HomePage;
