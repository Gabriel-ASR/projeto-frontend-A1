import Style from './FeaturedNews.module.css'

function FeaturedNews(props) {
    return <div className={Style.featuredNews}>{props.children}</div>
}

export default FeaturedNews