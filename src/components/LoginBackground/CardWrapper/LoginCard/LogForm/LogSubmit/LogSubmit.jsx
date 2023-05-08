 import Style from './LogSubmit.module.css'
 
 function LogSubmit(props) {
    return <input className={Style.logSubmit} type="submit" value={props.value}/>
 }

 export default LogSubmit