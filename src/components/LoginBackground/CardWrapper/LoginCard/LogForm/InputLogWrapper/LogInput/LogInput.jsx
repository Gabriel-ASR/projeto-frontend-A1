import Style from './LogInput.module.css'

function LogInput(props) {
    return <input className={Style.logInput} type={props.type} id={props.id} name={props.name} placeholder={props.placeholder}/>
}

export default LogInput