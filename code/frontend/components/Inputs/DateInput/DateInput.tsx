import styles from "./DateInput.module.css";

type DateInputProps = {
  value: string
  onChange: (value: string) => void
  labelText: string
}

export function DateInput({ value, onChange, labelText }: DateInputProps) {
  return (
    <label className={styles.dataLabel}>
        <p>{labelText}</p>
        <input
          type="date"
          value={value}
          onChange={e => onChange(e.target.value)}
          className={styles.dateInput}
        />
    </label>
  )
}

export default DateInput;