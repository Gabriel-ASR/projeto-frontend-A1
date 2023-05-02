import Style from './FeatAuthor.module.css'

function FeatAuthor(props) {
    return <p className={Style.featAuthor}>{props.authorInfo}</p>
}

export default FeatAuthor