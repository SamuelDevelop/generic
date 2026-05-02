import { useEffect, useState } from "react"
import styles from "./Inputs.module.css";

function ImageUpload({ value, onChange }: any) {
  const [preview, setPreview] = useState<string | null>(null)

  useEffect(() => {
    if (!value) {
      setPreview(null)
      return
    }

    const url = URL.createObjectURL(value)
    setPreview(url)

    return () => URL.revokeObjectURL(url)
  }, [value])

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={e => {
          const file = e.target.files?.[0]
          if (file) {
            onChange(file)
          }
        }}
      />

      {preview && <img src={preview} alt="" width={200} className={styles.imagePreview}/>}
    </>
  )
}

export default ImageUpload