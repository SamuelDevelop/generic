type ProfileType = {
    nickname: string
    gender: "MALE" | "FEMALE" | "NONBINARY" | "NOTINFORMED" | "UNDEFINED"
    firstname: string,
    lastname: string,
    profileImage: null,
    birthday: Date,
    description: string
}

export default ProfileType;