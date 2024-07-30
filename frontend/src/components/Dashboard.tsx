import CardsCollection from "./CardsCollection";
import CardThumb from "./CardThumb";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="container">
                <div className="dashboard__collections">
                    <div className="dashboard__title">Cards Collections</div>

                    <button className="btn btn--active">
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
                    <div className="dashboard__title">Cards Collections</div>
                    <button className="btn btn--active">
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

export default Dashboard;
