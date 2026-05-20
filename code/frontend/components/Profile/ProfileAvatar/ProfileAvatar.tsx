import ProfileType from "@/types/ProfileType";
import styles from "./ProfileAvatar.module.css"
import Image from "next/image";

type props = {
    profile: ProfileType
    onClick?: ()=> void;
}

function ProfileAvatar({profile, onClick} : props){
    return(
        <div 
            className={styles.avatar}
            onClick={onClick}
        >
            {
                profile.profileImage != "" && profile.profileImage != null ?
                <Image 
                    src={profile.profileImage}
                    alt={"profile-image"} 
                    width={1000}
                    height={1000}
                    className={styles.avatarImage}
                />
                :
                <div className={styles.defaultAvatar}>
                    <p>{profile.firstname.slice(0, 1)}{profile.lastname.slice(0, 1)}</p>
                </div>
            }
        </div>
    )
}

export default ProfileAvatar;