type PropsType = {
    fn: () => void
    description: string
    disabled?: boolean
}

const Button = ({fn, description, disabled = false}: PropsType) => {
    return (
        <button type='button' onClick={() => fn()} disabled={disabled}>{description}</button>
    )
}

export default Button