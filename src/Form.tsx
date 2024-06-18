import { useState } from "react";
import styles from "./Form.module.css";

export function Form() {
  const [email, setEmail] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Given email is: ", email);
    console.log("Form submitted!");
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>Once you submit, you can look in the console to see the result.</p>
      <div className={styles["input-container"]}>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        {/* Since we're trying to use the Subsequent-sibling 
            combinator to move the label around in CSS, the 
            label MUST come after the input 
        */}
        <label className={styles.label} htmlFor="email">
          Email
        </label>
      </div>
      <button className={styles.button}>Submit</button>
    </form>
  );
}
