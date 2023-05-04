import Style from './InfoItem.module.css'

function InfoItem(props) {
    return <div className={Style.infoItem}>{props.children}</div>
}

export default InfoItem