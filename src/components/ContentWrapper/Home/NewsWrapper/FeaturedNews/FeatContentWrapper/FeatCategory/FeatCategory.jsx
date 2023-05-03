import Style from './FeatCategory.module.css'

function FeatCategory(props) {
    return <span className={Style.featCategory}>{props.category}</span>
}

export default FeatCategory