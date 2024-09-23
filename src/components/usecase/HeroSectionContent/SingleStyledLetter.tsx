import React from 'react'

type IProps = {
    children: React.ReactNode
}

const SingleStyledLetter: React.FC<IProps> = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

export default SingleStyledLetter