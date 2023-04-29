import Style from './SignContentWrapper.module.css'

function SignContentWrapper(props) {
    return <div className={Style.signContentWrapper}>{props.children}</div>
}

export default SignContentWrapper