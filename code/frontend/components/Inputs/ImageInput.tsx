import { useState } from "react"

function ImageUpload() {
  const [preview, setPreview] = useState<string | null>(null)

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={e => {
          const file = e.target.files?.[0]
          if (file) {
            const url = URL.createObjectURL(file)
            setPreview(url)
          }
        }}
      />

      {preview && <img src={preview} alt="" width={200} />}
    </>
  )
}

export default ImageUpload;