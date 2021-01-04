import React from "react";
import styles from "./select.module.css";

const Select = ({
  input,
  meta,
  label,
  options,
}) => (
    <>
        <label className={styles.selectLabel}>{label}</label>
        <select {...input} className={styles.inputSelect}>
            {options.map((option) =>(
            <option key={option.id} value={option.id}>
                {option.value}
            </option>
           ) )}
        </select>
    </>
    
);
export default Select;