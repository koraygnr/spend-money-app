import styles from "./Button.module.css"

function Button( {name, style, onClick} ) {
  return (
    <button 
    className={`${styles[style]}`}
    onClick={onClick}
    >{name}</button>
  )
}

export default Button