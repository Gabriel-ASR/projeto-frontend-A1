import Style from './PageTitle.module.css'

function PageTitle(props) {
    return <h1 className={Style.pageTitle}>{props.titleText}</h1>
}

export default PageTitle