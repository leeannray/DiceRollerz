import React from "react";

/**
 * Button control
 * @param {Object} param0 id, buttonClass, text, onClick
 */
export function Button({ id, buttonClass, text, onClick, isDisabled }) {
    return (
        <button type="button" id={id} className={"waves-effect waves-light btn" + (buttonClass ? " " + buttonClass : "")} onClick={onClick} disabled={isDisabled}>{text}</button>
    );
}

/**
 * Floating Button Control
 * @param {Object} param0 id, color, buttonClass, iconName, onClick
 */
export function FloatingButton({ id, color, buttonClass, iconName, onClick, isDisabled }) {
    return (
        <button id={id} className={"btn-floating btn-large waves-effect waves-light " + (color ? color : "red") + (buttonClass ? " " + buttonClass : "")} onClick={onClick} disabled={isDisabled}><i class="material-icons">{(iconName ? iconName : "add")}</i></button>
    )
}

/**
 * Submit Button control
 * @param {Object} param0 id, type = "submit", name = "action", text, icon = "send", onClick
 */
export function SubmitButton({ id, type, name, text, icon, onClick, isDisabled }) {
    return (
        <button id={id} className="btn waves-effect waves-light red accent" type={(type ? type : "submit")} name={name ? name : "action"} onClick={onClick} disabled={isDisabled}>{text}
            <i className="material-icons right">{(icon ? icon : "send")}</i>
        </button>
    )
}