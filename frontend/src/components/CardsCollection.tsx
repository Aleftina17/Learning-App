import CardThumb from "./CardThumb";

const CardsCollection: React.FC = () => {
    return (
        <section className="cards-collection">
            <h4 className="cards-collection__title">Cards Collection #1</h4>
            <div className="cards-collection__tags">
                <span>React</span>
                <span>JS</span>
                <span>Redux</span>
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
