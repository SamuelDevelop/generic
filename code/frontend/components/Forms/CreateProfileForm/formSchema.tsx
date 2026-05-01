import { z } from "zod"

export const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),

  birthday: z.string()
            .refine((val) => !isNaN(Date.parse(val)), {
            message: "Data inválida",
  }),
  gender: z.enum(["MALE", "FEMALE", "NONBINARY", "NOTINFORMED", "UNDEFINED"]),

  description: z.string(),
  nickName: z.string(),

  profileImage: z
  .instanceof(File)
  .optional()
  .refine(file => {
    if (!file) return true
    return file.size <= 10 * 1024 * 1024
  }, "Máximo: 10MB")
  .refine(file => {
    if (!file) return true
    return ["image/jpeg", "image/png"].includes(file.type)
  }, "Formato inválido")
})