import Style from './FeatCategory.module.css'

function FeatCategory(props) {
    return <p className={Style.featCategory}>{props.category}</p>
}

export default FeatCategory