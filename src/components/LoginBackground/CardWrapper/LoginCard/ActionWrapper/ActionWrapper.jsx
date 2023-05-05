import Style from './ActionWrapper.module.css'

function ActionWrapper(props) {
    return <div className={Style.actionWrapper}>{props.children}</div>
}

export default ActionWrapper