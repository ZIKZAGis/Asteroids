import styles from './Button.module.scss'

type PropsType = {
    fn: () => void
    description?: string
    disabled?: boolean
    children?: React.ReactNode
}

const Button = ({fn, description, disabled = false, children}: PropsType) => {
    return (
        <button className={styles.button} type='button' onClick={() => fn()} disabled={disabled}>{description}{children}</button>
    )
}

export default Button