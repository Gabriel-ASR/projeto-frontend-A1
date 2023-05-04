import Style from "./TopText.module.css"

function TopText(props) {
    return <div className={Style.topText}>{props.children}</div>
}

export default TopText