import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { CiRepeat } from "react-icons/ci";

const Card = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
            <div className="card__content">
                <div className="card__front">
                    <button className="btn--close btn--double-bord">
                        <AiOutlineClose />
                    </button>
                    <div className="card__tags">
                        <span className="tag">React</span>
                        <span className="tag">Redux</span>
                    </div>
                    <div className="card__lvl">
                        <span className="tag tag--lvl">Middle</span>
                    </div>
                    <div className="card__question">Question is: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, deleniti?</div>
                    <button className="btn btn--double-bord btn--turn" onClick={handleFlip}>
                        <span>Show Answer</span>
                        <CiRepeat />
                    </button>
                </div>

                <div className="card__back">
                    <button className="btn--close btn--double-bord">
                        <AiOutlineClose />
                    </button>
                    <div className="card__answer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum officiis veritatis, similique exercitationem iure minus necessitatibus quae dolor? Ut optio neque a ad
                        inventore repellat eius, minus maxime porro, ipsum nesciunt. Sunt enim temporibus aliquam quisquam sed unde libero soluta corporis, et repellat necessitatibus suscipit sequi
                        expedita vero, aperiam fugit dicta similique nostrum cumque excepturi fuga consectetur iure deserunt! Reprehenderit assumenda quo officia. Id ipsum quam tempora quis incidunt
                        fuga architecto nemo atque sapiente ullam maiores molestiae dignissimos ipsa, quas.
                    </div>
                    <button className="btn btn--double-bord btn--turn" onClick={handleFlip}>
                        <span>Show Question</span>
                        <CiRepeat />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;

