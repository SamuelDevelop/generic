type ProfileType = {
    nickname: string
    gender: "MALE" | "FEMALE" | "NONBINARY" | "NOTINFORMED" | "UNDEFINED"
    firstname: string,
    lastname: string,
    profileImage: string | null,
    birthday: Date,
    description: string
}

export default ProfileType;