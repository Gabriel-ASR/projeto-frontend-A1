import Style from './formInput.module.css'

function InputText(props) {
    return <input type={props.type} id={props.id} name={props.name} className={Style.formInput} placeholder={props.placeholder}/>
}

export default InputText