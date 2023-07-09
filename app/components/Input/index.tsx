import React from "react"
import styles from "./input.module.css"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = ({ label, placeholder, maxLength }: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="input" className={styles.inputLabel}>
        {label}
      </label>
      <input
        id="input"
        className={styles.input}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  )
}

export default Input
