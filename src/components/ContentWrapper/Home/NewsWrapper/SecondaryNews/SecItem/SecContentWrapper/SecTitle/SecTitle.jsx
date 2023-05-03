import Style from './SecTitle.module.css'

function SecTitle(props) {
    return <h3 className={Style.secTitle}>{props.titleText}</h3>
}

export default SecTitle