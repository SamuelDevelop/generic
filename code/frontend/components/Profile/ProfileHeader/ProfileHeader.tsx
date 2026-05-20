import ProfileType from "@/types/ProfileType";
import styles from "./ProfileHeader.module.css"
import ProfileAvatar from "@/components/Profile/ProfileAvatar/ProfileAvatar";
import Icon from "@/components/Icon/Icon";

type props = {
    profile: ProfileType
    onClick?: ()=> void
}

function ProfileHeader({profile, onClick} : props){
    return (
        <div 
            onClick={onClick}
            className={styles.profileHeader}
        >
            <ProfileAvatar profile={profile}/>
            <div className={styles.profileContext}>
                <p>{profile.firstname}</p>
                <p><Icon icon="boat"/> <b>{profile.nickname}</b></p>
            </div>
        </div>
    )
}

export default ProfileHeader;