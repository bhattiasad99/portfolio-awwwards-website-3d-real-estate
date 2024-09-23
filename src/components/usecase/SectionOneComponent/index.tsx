import React from 'react'
import styles from './style.module.css'
import BackgroundVideoComponent from '@/components/base/BackgroundVideoComponent'
import Navbar from '../Navbar'
import HeroSectionContent from '../HeroSectionContent'

const SectionOneComponent = () => {
    return (
        <div className={styles.page}>
            <Navbar />
            <HeroSectionContent />
            <BackgroundVideoComponent containerStyleOverrides={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} src="https://thisismagma.com/wp-content/themes/magma/assets/home/hero/1.mp4?2" />
        </div>
    )
}

export default SectionOneComponent