import { ErrorMessageProps } from "../../types/types"

const ErrorMessage = ({error}:ErrorMessageProps) => {
    return (
        <p>{error}</p>
    )
}

export default ErrorMessage