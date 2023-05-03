import Style from './SecAuthor.module.css'

function SecAuthor(props) {
    return <span className={Style.secAuthor}>{props.authorInfo}</span>
}

export default SecAuthor