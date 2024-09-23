import React from 'react'

type IProps = {
    alignItems?: 'center' | 'flex-start' | 'flex-end',
    justifyContent?: 'center' | 'space-around' | 'space-evenly' | 'space-between' | 'flex-start',
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse',
    children: React.ReactNode,
    spacing?: number | string,
    style?: React.CSSProperties
}

const StackComponent: React.FC<IProps> = ({ alignItems = 'center', direction = 'row', justifyContent = 'center', spacing = 1, children, style }) => {
    return (
        <div style={{ display: 'flex', alignItems, flexDirection: direction, justifyContent, gap: spacing, ...style }}>{children}</div>
    )
}

export default StackComponent