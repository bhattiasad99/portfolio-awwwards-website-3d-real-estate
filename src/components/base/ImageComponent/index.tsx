import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

type IProps = {
    source: string | StaticImageData,
    alt: string,
    width?: string | number
}

const ImageComponent: FC<IProps> = ({ width = 'auto', source, alt }) => {
    return (
        <Image src={source} alt={alt} style={{
            width: width,
            height: 'auto'
        }} />
    )
}

export default ImageComponent