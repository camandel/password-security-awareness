import React, { useState, useEffect } from 'react';

/*
 * A single menu item
 * I deconstruct props to provide more readable code, allowing
 * any future coders to see exactly what props are expected
 */
const MenuItem = ({ itemName, className }) => {
    /*
     * Store our anchorTarget in state
     * We do not set it here, preferring to wait for after the component
     * is mounted to avoid any errors
     */
    const [anchorTarget, setAnchorTarget] = useState(null);

    /*
     * When the component mounts and/or updates, set our AnchorTarget based
     * on the itemName
     */
    useEffect(() => {
        setAnchorTarget(document.getElementById(itemName));
    }, [itemName]);

    /*
     * Where all the magic happens -- scrollIntoView on click
     */
    const handleClick = event => {
        event.preventDefault();
        anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    /*
     * Return the MenuItem as JSX
     * Remember to set your ariaLabel for accessability!
     */
    //const className = active ? "active" : "";
    return (
        <li>
            <a href={`#${itemName}`}
                onClick={handleClick}
                className={className}
            >
                {itemName}
            </a>
        </li>
    );
};

export default MenuItem;