import Style from './ActionTitle.module.css'

function ActionTitle(props) {
    return <h3 className={Style.actionTitle}>{props.actionTitle}</h3>
}

export default ActionTitle