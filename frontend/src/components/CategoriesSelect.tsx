const CategoriesSelect: React.FC = () => {
    return (
        <div className="select">
            <div className="select__top btn--double-bord">
                <span>Select Categories</span>
                <svg width="10" height="6" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 8L0.937822 0.5L13.0622 0.5L7 8Z" stroke="#fff" />
                </svg>
            </div>
            <div className="select__dropdown">
                <ul>
                    <li>
                        <label className="checkbox-field">
                            <div className="checkbox">
                                <input type="checkbox" />
                            </div>
                            <span>React</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox-field">
                            <div className="checkbox">
                                <input type="checkbox" />
                            </div>
                            <span>React</span>
                        </label>
                    </li>
                    <li>
                        <label className="checkbox-field">
                            <div className="checkbox">
                                <input type="checkbox" />
                            </div>
                            <span>React</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CategoriesSelect;
