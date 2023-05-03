import Style from './FeatAuthor.module.css'

function FeatAuthor(props) {
    return <span className={Style.featAuthor}>{props.authorInfo}</span>
}

export default FeatAuthor