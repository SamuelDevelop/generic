import { StaticImageData } from "next/image"

type HeaderProps = {
    isUserLogado : boolean,
    userHasPersonalImage?: boolean,
    userPersonalImage?: StaticImageData,
    userNickName?: string,
    userFirstName?: string,
}

export default HeaderProps;