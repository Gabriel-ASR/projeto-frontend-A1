import Style from './SecondaryNews.module.css'

function SecondaryNews(props) {
    return <div className={Style.secondaryNews}>{props.children}</div>
}

export default SecondaryNews