'use client'
import React, { FC, useEffect, useRef } from 'react'
import styles from './style.module.css'

type IProps = {
    src: string,
    muted?: boolean,
    containerStyleOverrides?: React.CSSProperties
}

const BackgroundVideoComponent: FC<IProps> = ({ src, muted, containerStyleOverrides }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const handlePlay = () => {
            const video = videoRef.current;

            // TypeScript now knows 'video' is an HTMLVideoElement or null
            if (video && video.paused && !video.ended) {
                video.play();
            }
        };

        const container = document.getElementById('video-container');

        if (container) {
            container.addEventListener('click', handlePlay);
            container.addEventListener('touchstart', handlePlay);
        }

        // Cleanup function to remove event listeners
        return () => {
            if (container) {
                container.removeEventListener('click', handlePlay);
                container.removeEventListener('touchstart', handlePlay);
            }
        };
    }, []);


    return (
        <div id="video-container" className={styles.container} style={{ ...containerStyleOverrides }}>
            <video
                className={styles.video}
                ref={videoRef} // Assign the ref to the video element
                src={src}
                autoPlay
                loop
                muted={muted}
                playsInline
            />
        </div>
    )
}

export default BackgroundVideoComponent