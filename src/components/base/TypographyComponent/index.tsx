import React from 'react'
import styles from './style.module.css'

type IProps = {
    variant?: "h1" | 'h2' | 'body',
    children: React.ReactNode,
    style?: React.CSSProperties,
    className?: string
}

const TypographyComponent: React.FC<IProps> = ({ variant = 'body', children, style, className, ...otherProps }) => {
    const commonProps = {
        style,
        ...otherProps
    }
    switch (variant) {
        case "h1":
            return <h1 className={`${styles.headingOne} ${styles.commonStyles} ${className}`} {...commonProps}>{children}</h1>
        case "h2":
            return <h2 className={`${styles.headingTwo} ${styles.commonStyles} ${className}`} {...commonProps}>{children}</h2>
        case "body":
            return <p className={`${styles.paragraph} ${styles.commonStyles} ${className}`} {...commonProps}>{children}</p>
    }
}

export default TypographyComponent