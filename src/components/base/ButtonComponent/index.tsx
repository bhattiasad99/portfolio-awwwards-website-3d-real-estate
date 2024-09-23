import React from 'react'
import styles from './styles.module.css'

type IProps = {
    children: React.ReactNode
}

const ButtonComponent: React.FC<IProps> = ({ children }) => {
    return (
        <button className={styles.btn}>{children}</button>
    )
}

export default ButtonComponent