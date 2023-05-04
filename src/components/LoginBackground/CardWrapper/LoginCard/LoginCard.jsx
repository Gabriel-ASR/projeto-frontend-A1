import Style from './LoginCard.module.css'

function LoginCard(props) {
    return <div className={Style.loginCard}>{props.children}</div>
}

export default LoginCard