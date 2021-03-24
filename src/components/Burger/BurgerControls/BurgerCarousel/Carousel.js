import React, { useState, useEffect } from 'react'

import classes from "./Carousel.module.css"

const Carousel = ({ children, show, infiniteLoop }) => {

    const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0)
    const [length, setLength] = useState(children.length)

    const [transitionEnabled, setTransitionEnabled] = useState(true)

    useEffect(() => {
        setLength(children.length)
    }, [children])

    useEffect(() => {
        if (infiniteLoop) {
            if (currentIndex === show || currentIndex === length) {
                setTransitionEnabled(true)
            }
        }
    }, [currentIndex, infiniteLoop, show, length])

    const next = () => {
        if (infiniteLoop || currentIndex < (length - show))
            setCurrentIndex(prevIndex => prevIndex + 1)
        console.log(currentIndex)
    }
    const prev = () => {
        if (infiniteLoop || currentIndex > 0)
            setCurrentIndex(prevIndex => prevIndex - 1)
        console.log(currentIndex)
    }

    const handleTransitionEnd = () => {
        if (infiniteLoop) {
            if (currentIndex === 0) {
                setTransitionEnabled(false)
                setCurrentIndex(length)
            } else if (currentIndex === length + show) {
                setTransitionEnabled(false)
                setCurrentIndex(show)
            }
        }
    }

    const renderExtraPrev = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            output.push(children[length - 1 - index])
        }
        output.reverse()
        return output
    }

    const renderExtraNext = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            output.push(children[index])
        }
        return output
    }

    let clsShow = null

    switch (show) {
        case 2:
            clsShow = `${classes.Content} ${classes.Show2}`
            break;
        case 3:
            clsShow = `${classes.Content} ${classes.Show3}`
            break;
        case 4:
            clsShow = `${classes.Content} ${classes.Show4}`
            break;
        case 5:
            clsShow = `${classes.Content} ${classes.Show5}`
            break;

        default:
            clsShow = classes.Content;
            break;
    }

    return (
        <div className={classes.Container}>
            <div className={classes.Wrapper}>

                {(infiniteLoop || currentIndex > 0) &&
                    <button className={classes.LeftArrow} onClick={prev}>
                        &lt;
                </button>
                }
                <div className={classes.ContentWrapper}>
                    <div
                        className={clsShow}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / show)}%)`,
                            transition: !transitionEnabled ? 'none' : undefined
                        }}
                        onTransitionEnd={() => handleTransitionEnd()}
                    >
                        {
                            (length > show && infiniteLoop) &&
                            renderExtraPrev()
                        }
                        {children}
                        {
                            (length > show && infiniteLoop) &&
                            renderExtraNext()
                        }
                    </div>
                </div>
                {(infiniteLoop || currentIndex < (length - show)) &&
                    <button className={classes.RigthArrow} onClick={next}>
                        &gt;
                </button>
                }
            </div>
        </div >





    )
}

export default Carousel
