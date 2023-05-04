import Style from './LoginBackground.module.css'

function LoginBackground(props) {
    return <div className={Style.loginBackground}>{props.children}</div>
}

export default LoginBackground