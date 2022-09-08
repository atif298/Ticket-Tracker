import "./Button.scss";

const Button = (props) => {
    const { buttonText, isPlus } = props;
    let buttonFunction = isPlus ? "plus" : "minus";
    return <button className={buttonFunction}>{buttonText}</button>;
}

export default Button;