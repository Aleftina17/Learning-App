import React, { useState } from "react";
import { SlHome, SlLogin, SlGrid, SlBulb } from "react-icons/sl";
import { BsChevronDoubleRight } from "react-icons/bs";

const Sidebar: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSidebarToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    };

    return (
        <aside className={isExpanded ? "sb-expanded" : ""}>
            <nav>
                <ul>
                    <li>
                        <a href="#" className="active">
                            <SlHome />
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <SlGrid />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <SlBulb />
                            <span>Create card</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <SlLogin />
                            <span>Login</span>
                        </a>
                    </li>
                    <li>
                        <a href="#!" data-resize-btn onClick={handleSidebarToggle}>
                            <BsChevronDoubleRight />
                            <span>Collapse</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
