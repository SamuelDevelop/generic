import { z } from "zod"

export const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  description: z.string(),
  gender: z.enum(["MALE", "FEMALE", "NONBINARY", "NOTINFORMED", "UNDEFINED"]),
  nickName: z.string(),
  imagem: z
    .any()
    .optional()
    .refine(files => {
      if (!files || files.length === 0) return true
      return files[0].size <= 10 * 1024 * 1024
    }, "Máximo: 10MB")
    .refine(files => {
      if (!files || files.length === 0) return true
      return ["image/jpeg", "image/png"].includes(files[0].type)
    }, "Formato inválido")

})