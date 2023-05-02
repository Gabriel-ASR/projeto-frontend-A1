import Style from './FeaturedImage.module.css'

function FeaturedImage(props) {
    return <div className={Style.featuredImage}>{props.children}</div>
}

export default FeaturedImage