import Style from './InputWrapper.module.css'

function InputWrapper(props) {
    return <div className={Style.inputWrapper}>{props.children}</div>
}

export default InputWrapper