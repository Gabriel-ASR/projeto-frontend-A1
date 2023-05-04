import Style from './AboutLongText.module.css'

function AboutLongText(props) {
    return <p className={Style.aboutLongText}>{props.children}</p>
}

export default AboutLongText