type DateInputProps = {
  value: Date | null
  onChange: (date: Date | null) => void
}

function DateInput({ value, onChange }: DateInputProps) {
  return (
    <input
      type="date"
      value={value ? value.toISOString().slice(0, 10) : ""}
      onChange={e => {
        const val = e.target.value
        onChange(val ? new Date(val) : null)
      }}
    />
  )
}

export default DateInput;