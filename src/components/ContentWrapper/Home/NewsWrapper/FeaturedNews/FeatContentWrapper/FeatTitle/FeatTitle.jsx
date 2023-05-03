import Style from './FeatTitle.module.css'

function FeatTitle(props) {
    return <h2 className={Style.featTitle}>{props.titleText}</h2>
}

export default FeatTitle