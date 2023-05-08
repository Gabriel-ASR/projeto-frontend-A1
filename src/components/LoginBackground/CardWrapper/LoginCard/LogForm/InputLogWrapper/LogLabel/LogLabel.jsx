import Style from './LogLabel.module.css'

function LogLabel(props) {
    return <label className={Style.logLabel} htmlFor={props.htmlFor}>{props.children}</label>
}

export default LogLabel