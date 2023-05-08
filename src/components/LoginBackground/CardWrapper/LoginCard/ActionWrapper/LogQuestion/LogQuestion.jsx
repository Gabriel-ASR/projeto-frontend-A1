import Style from './LogQuestion.module.css'

function LogQuestion(props) {
    return <h3 className={Style.logQuestion}>{props.innerText}</h3>
}

export default LogQuestion