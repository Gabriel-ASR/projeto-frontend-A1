import Style from './ContentWrapper.module.css'

function ContentWrapper(props) {
    return <div className={Style.contentWrapper}>{props.children}</div>
}

export default ContentWrapper