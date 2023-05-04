import Style from './FormLabel.module.css'

function FormLabel(props) {
    return <label className={Style.formLabel} htmlFor={props.htmlFor}>{props.children}</label>
}

export default FormLabel