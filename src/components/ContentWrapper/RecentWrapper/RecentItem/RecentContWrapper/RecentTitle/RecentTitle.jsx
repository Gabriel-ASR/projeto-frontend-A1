import Style from './RecentTitle.module.css'

function RecentTitle(props) {
    return <h2 className={Style.recentTitle}>{props.titleText}</h2>
}

export default RecentTitle