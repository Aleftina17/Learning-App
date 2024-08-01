import CollectionsSearch from "../components/CollectionsSearch";
import CardsCollection from "./../components/CardsCollection";

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
            </div>
        </div>
    );
};

export default DashboardPage;