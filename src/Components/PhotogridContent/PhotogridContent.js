import React from 'react'
import PhotogridContentCSS from "./PhotogridContent.module.css"

const PhotogridContent = () => {
  return (
    <section id = {PhotogridContentCSS.photogridSection}>
        
        <div className={PhotogridContentCSS.tripleGridder}>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
        </div>
        
        <div className={PhotogridContentCSS.leadingDoubleGridder}>
            <div className={[PhotogridContentCSS.IMGgridContainer, PhotogridContentCSS.doubleIMGIdentifier].join(" ")}></div>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
        </div>
        
        <div className={PhotogridContentCSS.trainlingDoubleGridder}>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
            <div className={[PhotogridContentCSS.IMGgridContainer, PhotogridContentCSS.doubleIMGIdentifier].join(" ")}></div>
        </div>

        <div className={PhotogridContentCSS.tripleGridder}>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
        </div>
    </section>
  )
}

export default PhotogridContent