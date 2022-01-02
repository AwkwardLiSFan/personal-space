import React, {useState} from 'react'
import { SliderData } from '../../constants/constants'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import styles from './ImageSlider.module.css'

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1) 
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
 
    if (!Array.isArray(slides) || slides.length <= 0){
        return null
    }
    
    return (
        
        <section id = "slider" className = {styles.section}>
                <FaArrowAltCircleLeft className = {styles.left_arrow} onClick= {prevSlide} />
                <FaArrowAltCircleRight className = {styles.right_arrow } onClick = {nextSlide} />
                {SliderData.map((slide, index) => {
                    return(
                        <div className = {index === current ?  styles.slide_active : styles.slide} key = {index}>
                            {index === current && (<img src = {slide.image} className = {styles.img} />
                            )}
                        </div>
                    ) 
                })}
        </section>
        
    );
};

export default ImageSlider
