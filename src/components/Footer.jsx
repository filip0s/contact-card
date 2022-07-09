import twitterIcon from "../icons/Twitter Icon.svg"
import linkedinIcon from "../icons/Linkedin Icon.svg"
import instagramIcon from "../icons/Instagram Icon.svg"
import githubIcon from "../icons/GitHub Icon.svg"
import facebookIcon from "../icons/Facebook Icon.svg"

export default function Footer() {
    return (
        <footer>
            <a href="#"><img src={twitterIcon} alt="Twitter icon"/></a>
            <a href="#"><img src={facebookIcon} alt="Facebook icon"/></a>
            <a href="#"><img src={instagramIcon} alt="Instagram icon"/></a>
            <a href="#"><img src={linkedinIcon} alt="LinkedIn icon"/></a>
            <a href="#"><img src={githubIcon} alt="GitHub icon"/></a>
        </footer>
    )
}