import React from 'react'

type IProps = {
    children: React.ReactNode,
    index: number
}

const SingleStyledLetter: React.FC<IProps> = ({ children, index }) => {
    return (
        <div className="letter" style={{
            '--index': index
        } as React.CSSProperties}>{children}</div>
    )
}

export default SingleStyledLetter