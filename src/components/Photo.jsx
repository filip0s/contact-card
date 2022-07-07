import profilePhoto from "../images/bateman.webp"


export default function Photo() {
    return (
        <img className="card--profile-photo" alt="Profile photo of Patrick Bateman" src={profilePhoto}/>
    )
}