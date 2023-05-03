import Style from './NewsWrapper.module.css'

function NewsWrapper(props) {
    return <div className={Style.newsWrapper}>{props.children}</div>
}

export default NewsWrapper