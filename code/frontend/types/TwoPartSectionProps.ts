import { StaticImageData } from "next/image"

type TwoPartSectionProps = {
    children : React.ReactNode
    image: StaticImageData | string
    alt?: string
}

export default TwoPartSectionProps;