import Card from "./Card";

const CardsCollection = () => {
    return (
        <section className="cards-collection">
            <div className="container">
                <h4 className="cards-collection__title">Cards Collection #1</h4>
                <div className="cards-collection__tags">
                    <span>React</span>
                    <span>JS</span>
                    <span>HTML</span>
                </div>
                <div className="cards-collection__items">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    );
};

export default CardsCollection;
