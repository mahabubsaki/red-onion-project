import React from 'react';
import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            style={{ borderBottom: match ? "2px solid pink" : "none", color: match ? "pink" : "black", transition: 'all 0.5s linear' }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;