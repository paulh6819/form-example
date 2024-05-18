import styles from "./Form.module.css";

export function Form() {
  return (
    <form className={styles.form}>
      <div className={styles["input-container"]}>
        <input
          className={styles.input}
          type="text"
          id="email"
          name="email"
          placeholder="Email"
        />
        <label className={styles.label} htmlFor="email">
          Email:
        </label>
      </div>
      <button className={styles.button}>Submit</button>
    </form>
  );
}
