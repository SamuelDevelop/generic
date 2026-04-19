import { StaticImageData } from "next/image"

type PostProps = {

    authorNickName: string,
    authorFirstName: string,
    authorLastName: string,
    hasProfileImage: boolean,
    profileImage?: string | StaticImageData | null,
    postImage: string | StaticImageData | null,
    publicationDescription: string,
    likesNumber: number,
    commentsnumber: number,
}

export default PostProps;