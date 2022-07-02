import { Children } from "react/cjs/react.production.min";

const Button = ( {children, className, onClick} ) => {
    return(
        <button 
        type="button" 
        className={className}
        onClick={onClick}
    >
        {children}
    </button>
    )
}

export default Button;