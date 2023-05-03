import Style from './SecItem.module.css'

function SecItem(props) {
    return <div className={Style.secItem}>{props.children}</div>
}

export default SecItem