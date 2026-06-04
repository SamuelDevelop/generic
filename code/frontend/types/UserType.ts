export type User = {
    name: string
    email: string
    password: string
    role: UserRoleEnum
    gender: GenderEnum
    birthday: Date
    phoneNumber: string | null
}