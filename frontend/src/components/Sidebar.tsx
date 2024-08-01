import React, { useState } from "react";
import { SlHome, SlLogin, SlGrid, SlBulb, SlLayers } from "react-icons/sl";
import { BsChevronDoubleRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
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
                        <NavLink to="/">
                            <SlHome />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard">
                            <SlGrid />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/all">
                            <SlLayers />
                            <span>All Cards</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/create">
                            <SlBulb />
                            <span>Create Card</span>
                        </NavLink>
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
