type DateInputProps = {
  value: string
  onChange: (value: string) => void
  labelText: string
}

export function DateInput({ value, onChange, labelText }: DateInputProps) {
  return (
    <label>
        <p>{labelText}:</p>
        <input
        type="date"
        value={value}
        onChange={e => onChange(e.target.value)}
        />
    </label>
    
  )
}

export default DateInput;