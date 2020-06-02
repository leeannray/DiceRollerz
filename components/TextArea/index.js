import React from "react";

/**
 * Textarea component
 * @param {Object} propz id, colSize, label, value, wrapperClass, areaClass, isDisabled, isRequired
 */
export function Textarea (propz) {
    const { id, colSize, value, label , wrapperClass, areaClass, isDisabled, isRequired } = propz;
    return (
        <div className={"input-field col " + (!colSize ? "s12" : colSize) + (wrapperClass ? " " + wrapperClass : "")}>
          <textarea 
            id={id} 
            className={(areaClass ? "materialize-textarea " + areaClass : "materialize-textarea white-text")}
            disabled={isDisabled}
            required={isRequired}
          >
            {value}
          </textarea>
          <label htmlFor={id}>{label}</label>
        </div>
    )
}

/**
 * Textarea component with icon prefix
 * @param {Object} propz id, colSize, icon, label, value, wrapperClass, areaClass, isDisabled, isRequired
 */
export function TextareaWIcon (propz) {
    const {id, colSize, value, label, icon, wrapperClass, areaClass, isDisabled, isRequired } = propz;
    return (
        <div className={"input-field col " + (!colSize ? "s12" : colSize) + (wrapperClass ? " " + wrapperClass : "")}>
          <i className="material-icons prefix">{icon}</i>
          <textarea 
            id={id} 
            className={(areaClass ? "materialize-textarea " + areaClass : "materialize-textarea white-text")}
            disabled={isDisabled}
            required={isRequired}
          >
            {value}
          </textarea>
          <label htmlFor={id}>{label}</label>
        </div>
    )
}