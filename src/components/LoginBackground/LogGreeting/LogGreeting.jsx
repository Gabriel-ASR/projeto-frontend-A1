import Style from './LogGreeting.module.css'

function LogGreeting(props) {
    return <div className={Style.logGreeting}>{props.children}</div>
}

export default LogGreeting