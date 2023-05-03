import Style from './SecContentWrapper.module.css'

function SecContentWrapper(props) {
    return <div className={Style.secContentWrapper}>{props.children}</div>
}

export default SecContentWrapper