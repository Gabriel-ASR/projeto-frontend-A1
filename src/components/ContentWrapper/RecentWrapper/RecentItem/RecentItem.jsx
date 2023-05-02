import Style from './RecentItem.module.css'

function RecentItem(props) {
    return <div className={Style.recentItem}>{props.children}</div>
}

export default RecentItem