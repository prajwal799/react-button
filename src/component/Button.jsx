const Button = ({title , onClick}) => {
    return <button 
    style = {{
      margin : "10px"
    }}
    onClick={onClick}>
    {title}
    </button>;
}

export default Button;