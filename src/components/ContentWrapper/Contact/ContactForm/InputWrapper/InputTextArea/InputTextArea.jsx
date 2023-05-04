import Style from './InputTextArea.module.css'

function InputTextArea(props) {
    return <textarea id="request" name="request" className={Style.inputTextArea} placeholder={props.placeholder}>{props.children}</textarea>
}

export default InputTextArea