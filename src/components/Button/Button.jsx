import "./Button.scss";

const Button = (props) => {
    const { buttonText, isPlus } = props;
    let buttonFunction = isPlus ? "button__plus" : "button__minus";
    return <button className={buttonFunction}>{buttonText}</button>;
}

export default Button;