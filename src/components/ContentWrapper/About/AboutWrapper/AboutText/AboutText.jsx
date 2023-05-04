import Style from './AboutText.module.css'

function AboutText(props) {
    return <p className={Style.aboutText}>{props.children}</p>
}

export default AboutText