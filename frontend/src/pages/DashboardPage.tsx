import CollectionsSearch from "../components/CollectionsSearch";
import CardsCollection from "./../components/CardsCollection";
import CardThumb from "./../components/CardThumb";

const DashboardPage: React.FC = () => {
    return (
        <div className="dashboard">
            <div className="container">
                <CollectionsSearch />

                <div className="dashboard__collections">
                    <div className="dashboard__title">Cards Collections</div>

                    <button className="btn btn--moving">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Try Random Collection
                    </button>

                    <div className="dashboard__collections-items">
                        <CardsCollection />
                        <CardsCollection />
                        <CardsCollection />
                    </div>
                </div>

                <div className="dashboard__all">
                    <div className="dashboard__title">All Cards</div>
                    <button className="btn btn--moving">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Add New Card
                    </button>
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

export default DashboardPage;