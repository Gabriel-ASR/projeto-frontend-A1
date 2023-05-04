import Style from './FormLabel.module.css'

function FormLabel(props) {
    return <label className={Style.formLabel} for={props.for}>{props.children}</label>
}

export default FormLabel