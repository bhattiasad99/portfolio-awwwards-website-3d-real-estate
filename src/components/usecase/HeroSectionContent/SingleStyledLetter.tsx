import React from 'react'

type IProps = {
    children: React.ReactNode,
    index: number
}

const SingleStyledLetter: React.FC<IProps> = ({ children, index }) => {
    const delay = `${index * 0.05}s`;
    return (
        <div className="letter" style={{ animationDelay: delay }}>{children}</div>
    )
}

export default SingleStyledLetter