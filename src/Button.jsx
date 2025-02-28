

const Button = ({text, type = "button", disabled}) => {
  return (
    <div>
        <button type={type} disabled={disabled}>{text}</button>
    </div>
  )
}

export default Button
