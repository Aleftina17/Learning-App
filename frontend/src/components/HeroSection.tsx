import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero__title">Frontend Flashcards</div>
            <div className="hero__desc">Create and use cards to prepare for job interview or check your knowledge of the basics</div>
            <div className="hero__btns">
                <Link to="/create" className="btn btn--primary">
                    Create Card
                </Link>
                <Link to="/dashboard" className="btn btn--secondary">
                    <span>Browse Collections</span>
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;
