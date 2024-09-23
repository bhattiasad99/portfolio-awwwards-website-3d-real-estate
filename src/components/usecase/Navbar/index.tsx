import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import ImageComponent from '@/components/base/ImageComponent'
import { RiMenuLine } from '@remixicon/react'
import ButtonComponent from '@/components/base/ButtonComponent'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ImageComponent width="4%" source={logo} alt="nav" />
            <div className={styles.btnContainer}>
                <ButtonComponent>Book a Demo</ButtonComponent>
                <ButtonComponent>
                    <RiMenuLine size={15} />
                </ButtonComponent>
            </div>
        </nav>
    )
}

export default Navbar