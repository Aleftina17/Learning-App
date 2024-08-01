import { SlMagnifier } from "react-icons/sl";
import CategoriesSelect from "./CategoriesSelect";

const CollectionsSearch: React.FC = () => {
    return (
        <div className="search">
            <input type="search" placeholder="Enter collections title..." />
            <button className="btn btn--search btn--double-bord">
                <SlMagnifier />
            </button>
            <CategoriesSelect />
        </div>
    );
};

export default CollectionsSearch;
