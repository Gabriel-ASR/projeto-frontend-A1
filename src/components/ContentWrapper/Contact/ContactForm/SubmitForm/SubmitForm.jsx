import Style from './SubmitForm.module.css'

function SubmitForm(props) {
    return <input className={Style.submitForm} type="submit" value={props.value}/>
}

export default SubmitForm