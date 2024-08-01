import React, { useState } from "react";
import { SlHome, SlLogin, SlGrid, SlBulb, SlLayers } from "react-icons/sl";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignUpButton, UserButton, useUser } from "@clerk/clerk-react";

const Sidebar: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { user } = useUser();

    const handleSidebarToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    };

    return (
        <aside className={isExpanded ? "sb-expanded" : ""}>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="active">
                            <SlHome />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard">
                            <SlGrid />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/all">
                            <SlLayers />
                            <span>All Cards</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/create">
                            <SlBulb />
                            <span>Create Card</span>
                        </Link>
                    </li>
                    <li>
                        <SignedOut>
                            <SignUpButton>
                                <a href="#!">
                                    <SlLogin />
                                    <span>Sign Up</span>
                                </a>
                            </SignUpButton>
                        </SignedOut>
                        
                    </li>
                    <li className="user-item">
                        
                    <SignedIn>
                            <a href="#!">
                                <label>
                                <UserButton />
                                <span>{user?.firstName}</span>
                                </label>
                            </a>
                        </SignedIn>
                        
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
