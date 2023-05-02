import Style from './RecentDesc.module.css'

function RecentDesc(props) {
    return <p className={Style.recentDesc}>{props.description}</p>
}

export default RecentDesc