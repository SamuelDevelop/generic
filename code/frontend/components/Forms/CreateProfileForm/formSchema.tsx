import { z } from "zod"

const requiredString = z.string().min(1, "Campo obrigatório")

export const schema = z.object({
  firstName: requiredString,
  lastName: requiredString,

  birthday: z.string()
            .refine((val) => !isNaN(Date.parse(val)), {
            message: "Data inválida",
  }),
  gender: z.enum(["MALE", "FEMALE", "NONBINARY", "NOTINFORMED", "UNDEFINED"]),

  description: z.string(),
  nickName: requiredString,

  profileImage: z
  .instanceof(File)
  .optional()
  .refine(file => {
    if (!file) return true
    return file.size <= 50 * 1024 * 1024
  }, "Máximo: 50MB")
  .refine(file => {
    if (!file) return true
    return ["image/jpeg", "image/png"].includes(file.type)
  }, "Formato inválido")
})