import { AiFillThunderbolt } from "react-icons/ai"
import { FaSearch } from "react-icons/fa"
import { FaBook, FaRegComment, FaRegHeart, FaSailboat, FaShare } from "react-icons/fa6"
import { FiAlertTriangle } from "react-icons/fi"

type IconProps = {
    icon: "boat" | "like" | "comment" | "alert" | "share" | "search" | "swirl" | "book"
}

const context = {
    boat: <FaSailboat />,
    like: <FaRegHeart />,
    comment: <FaRegComment />,
    share: <FaShare />,
    alert: <FiAlertTriangle />,
    search: <FaSearch />,
    swirl: <AiFillThunderbolt />,
    book: <FaBook />        
}

function Icon({icon} : IconProps){
    return context[icon] ?? context["alert"];
}

export default Icon;