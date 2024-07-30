const HeroSection = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__title">Frontend Flashcards</div>
                <div className="hero__desc">Create and use cards to prepare for job interview or check your knowledge of the basics</div>
                <div className="hero__btns">
                    <button className="btn btn--primary">Create Card</button>
                    <button className="btn btn--secondary">
                        <span>Browse Collections</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
