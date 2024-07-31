import CardThumb from "./CardThumb";

const CardsCollection: React.FC = () => {
    return (
        <section className="cards-collection">
            <a href='#!' className="cards-collection__title">Cards Collection #1</a>
            <div className="cards-collection__tags">
                <span className="tag">React</span>
                <span className="tag">JS</span>
                <span className="tag">Redux</span>
            </div>
            <div className="cards-collection__items">
                <CardThumb />
                <CardThumb />
                <CardThumb />
                <CardThumb />
                <CardThumb />
            </div>
        </section>
    );
};

export default CardsCollection;
