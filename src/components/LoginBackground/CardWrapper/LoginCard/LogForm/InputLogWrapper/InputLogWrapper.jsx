import Style from './InputLogWrapper.module.css'

function InputLogWrapper(props) {
    return <div className={Style.inputLogWrapper}>{props.children}</div>
}

export default InputLogWrapper