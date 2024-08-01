import CardThumb from "../components/CardThumb";
import CategoriesSelect from "../components/CategoriesSelect";

const AllCardsPage: React.FC = () => {
    return (
        <div className="dashboard">
            <div className="container">
                <div className="dashboard__all">
                    <div className="dashboard__title">All Cards</div>
                    <CategoriesSelect />
                    <div className="dashboard__all-items">
                        <CardThumb />
                        <CardThumb />
                        <CardThumb />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCardsPage;