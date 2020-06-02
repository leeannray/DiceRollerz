import React from "react";

export function Avatar (propz) {
    return (
        <ul className="collection">
            {propz.children}
        </ul>
    );
}

/**
 * Avatar component with circular picture
 * @param {Object} param0 imagePath, imageHeight, altText, title, text, hRef, colSize, wrapperClass, key
 */
export function AvatarWPic({ imagePath, altText, imageLinkOnClick, title, children, colSize, wrapperClass, key }) {
    return (
        <li className={"blue-grey white-text collection-item avatar col " + (colSize ? colSize : "s12") + (wrapperClass ? " " + wrapperClass : "")} key={key}>
            {(title ? <h6>{title}</h6> : "")}
            <div className="pointer" onClick={imageLinkOnClick}>
                <img src={imagePath} alt={altText} className="circle" />
            </div>
            {children}
        </li>
    );
}
