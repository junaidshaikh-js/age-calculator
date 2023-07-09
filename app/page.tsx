"use client"
import Image from "next/image"

import Input from "./components/Input"
import Seperator from "./components/Seperator"
import styles from "./page.module.css"
import Arrow from "../images/icon-arrow.svg"
import { formFields } from "./constants/formFields"
import React from "react"

const Page = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className={styles.sectionWrapper}>
      <section className={styles.section}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.fieldsWrapper}>
            {formFields.map((field) => {
              const { label, placeholder, maxlength } = field
              return (
                <Input
                  label={label}
                  placeholder={placeholder}
                  maxLength={maxlength}
                  key={label}
                />
              )
            })}
          </div>
          <div className={styles.buttonWrapper}>
            <Seperator />
            <button className={styles.submitButton} type="submit">
              <span className="sr-only">Submit</span>
              <Image src={Arrow} alt="" aria-hidden="true" priority />
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Page
