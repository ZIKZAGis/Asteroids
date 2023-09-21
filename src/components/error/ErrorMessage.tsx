/* eslint-disable no-restricted-globals */
import { ErrorMessageProps } from "../../types/types"
import styles from './ErrorMessage.module.scss'
import {IoReloadOutline} from 'react-icons/io5'

const ErrorMessage = ({error}:ErrorMessageProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <p>{error}</p>
                <button type="button" onClick={() => location.reload()}>Reload page <IoReloadOutline/></button>
            </div>
        </div>
    )
}

export default ErrorMessage