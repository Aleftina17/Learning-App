import { useUser } from "@clerk/clerk-react";
import HeroSection from "../components/HeroSection";
import CardsCollection from "../components/CardsCollection";
import Card from "../components/Card";

const HomePage: React.FC = () => {
    const { user } = useUser();

    return (
        <div className="home">
            <div className="container">
                <HeroSection />
                <CardsCollection />
            </div>
            <Card />
        </div>
    );
};

export default HomePage;
