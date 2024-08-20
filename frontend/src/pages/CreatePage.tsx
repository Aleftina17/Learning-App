const CreatePage: React.FC = () => {
    return (
        <div className="create">
            <div className="container">
                <div className="create__title">Create card</div>

                <form className="create-form">
                    <div className="create-form__front">
                        <span className="create-form__title">Front side of the card</span>
                        <div className="create-form__container">
                            <div className="input-wrapper">
                                <span className="input-title">Question:</span>
                                <textarea className="textarea" placeholder="Enter question..." />
                            </div>
                            <div className="input-wrapper">
                                <span className="input-title">Categories:</span>

                                <div className="input-grid">
                                    <label className="checkbox-field">
                                        <input type="checkbox" />
                                        <div className="checkmark"></div>
                                        <span>React</span>
                                    </label>

                                    <label className="checkbox-field">
                                        <input type="checkbox" />
                                        <div className="checkmark"></div>
                                        <span>Redux</span>
                                    </label>

                                    <label className="checkbox-field">
                                        <input type="checkbox" />
                                        <div className="checkmark"></div>
                                        <span>JS</span>
                                    </label>

                                    <label className="checkbox-field">
                                        <input type="checkbox" />
                                        <div className="checkmark"></div>
                                        <span>React</span>
                                    </label>

                                    <label className="checkbox-field">
                                        <input type="checkbox" />
                                        <div className="checkmark"></div>
                                        <span>Web</span>
                                    </label>
                                </div>
                            </div>
                            <div className="input-wrapper">
                                <span className="input-title">Difficulty level:</span>
                                <label className="checkbox-field">
                                    <input type="checkbox" />
                                    <div className="checkmark"></div>
                                    <span>Easy</span>
                                </label>
                                <label className="checkbox-field">
                                    <input type="checkbox" />
                                    <div className="checkmark"></div>
                                    <span>Medium</span>
                                </label>
                                <label className="checkbox-field">
                                    <input type="checkbox" />
                                    <div className="checkmark"></div>
                                    <span>Hard</span>
                                </label>
                                <label className="checkbox-field">
                                    <input type="checkbox" />
                                    <div className="checkmark"></div>
                                    <span>Very Hard</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="create-form__back">
                        <span className="create-form__title">Back side of the card</span>
                        <div className="create-form__container">
                            <div className="input-wrapper">
                                <span className="input-title">Answer:</span>
                                <textarea className="textarea" placeholder="Enter answer..." />
                            </div>
                        </div>
                    </div>

                    <button className="btn btn--save">Save Card</button>
                </form>
            </div>
        </div>
    );
};

export default CreatePage;
