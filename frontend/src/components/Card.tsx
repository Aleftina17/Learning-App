const Card = () => {
    return (
        <div className="card">
            <div className="card__front">
                <div className="card__question">Question is: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, deleniti?</div>
                <div className="card__tags">
                    <span>React</span>
                    <span>Redux</span>
                </div>
                <div className="card__lvl">Middle</div>
            </div>

            <div className="card__back">
                <div className="card__answer">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum officiis veritatis, similique exercitationem iure minus necessitatibus quae dolor? Ut optio neque a ad
                    inventore repellat eius, minus maxime porro, ipsum nesciunt. Sunt enim temporibus aliquam quisquam sed unde libero soluta corporis, et repellat necessitatibus suscipit sequi
                    expedita vero, aperiam fugit dicta similique nostrum cumque excepturi fuga consectetur iure deserunt! Reprehenderit assumenda quo officia. Id ipsum quam tempora quis incidunt fuga
                    architecto nemo atque sapiente ullam maiores molestiae dignissimos ipsa, quas.
                </div>
            </div>
        </div>
    );
};

export default Card;
