import Style from './LogInLinkWrapper.module.css'

function LogInLinkWrapper(props) {
    return (
        <div className={Style.logInLinkWrapper}>{props.children}</div>
    )
}

export default LogInLinkWrapper