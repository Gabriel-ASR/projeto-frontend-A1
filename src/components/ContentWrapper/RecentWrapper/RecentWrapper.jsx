import Style from './RecentWrapper.module.css'

function RecentWrapper(props) {
    return <div className={Style.recentWrapper}>{props.children}</div>
}

export default RecentWrapper