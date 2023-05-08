import Style from './LogForm.module.css'

function LogForm(props) {
    return <form className={Style.logForm}>{props.children}</form>
}

export default LogForm