import React from "react";

/**
 * Text Input control
 * @param {Object} propz id, colSize, placeholder, label, type ("text"), inputClass ("validate"), wrapperClass, labelClass, value, onChange, isDisabled, isRequired
 */
export function Input(propz) {
    const { 
        id, 
        colSize, 
        placeholder, 
        label, 
        type, 
        inputClass, 
        wrapperClass, 
        labelClass,
        value, 
        defaultValue, 
        onChange, 
        isDisabled, 
        isRequired 
    } = propz
    return (
        <div className={"input-field col " + (colSize ? colSize : "s12") + (wrapperClass ? " " + wrapperClass : "")}>
            <input 
                id={id} 
                className={!inputClass ? "validate" : inputClass}
                placeholder={placeholder} 
                type={!type ? "text" : type} 
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
                disabled={isDisabled}
                required={isRequired}
            />
            <label htmlFor={id} className={labelClass}>{label}</label>
        </div>
    );
}

/**
 * Text Input control
 * @param {Object} propz id, colSize, placeholder, icon, label, type ("text"), inputClass ("validate"), wrapperClass, labelClass, value, onChange, isDisabled, isRequired
 */
export function InputWIcon(propz) {
    const { 
        id, 
        colSize, 
        placeholder, 
        label, 
        type, 
        inputClass, 
        wrapperClass, 
        labelClass,
        icon, 
        value, 
        defaultValue, 
        onChange, 
        isDisabled, 
        isRequired 
    } = propz
    return (
        <div className={"input-field col " + (colSize ? colSize : "s12") + (wrapperClass ? " " + wrapperClass : "")}>
            <i className="material-icons prefix red-text">{icon}</i>
            <input 
                id={id} 
                className={!inputClass ? "validate white-text" : inputClass}
                placeholder={placeholder} 
                type={!type ? "text" : type} 
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
                disabled={isDisabled}
                required={isRequired}
            />
            <label htmlFor={id} className={labelClass}>{label}</label>
        </div>
    );
}

/**
 * Text Input control
 * @param {Object} propz id, colSize, placeholder, label, type ("text"), inputClass ("validate"), wrapperClass, value, onChange, isDisabled, isRequired
 */
export function InputNoLabel(propz) {
    const { 
        id, 
        colSize, 
        placeholder, 
        type, 
        inputClass, 
        wrapperClass, 
        title,
        value, 
        defaultValue, 
        onChange, 
        isDisabled, 
        isRequired 
    } = propz
    return (
        <div className={"user-field col " + (colSize ? colSize : "s12") + (wrapperClass ? " " + wrapperClass : "")}>
            <input 
                id={id} 
                className={!inputClass ? "validate white-text" : inputClass}
                placeholder={placeholder} 
                type={!type ? "text" : type} 
                title={title}
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
                disabled={isDisabled}
                required={isRequired}
            />
        </div>
    );
}
