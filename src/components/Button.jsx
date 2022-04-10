import React from 'react'
import styles from '../styles/Global'

const Button = ({assetUrl , link }) => {
  return (
    <div className={styles.btnBlack}
    onClick={() => window.open(link , "_blank")}
    >
      <img src={assetUrl} alt="expo_icon"
      className={styles.btnIcon} />
      <div >
        <p className={ `${styles.btnText} font-normal text-xs`} fon>
          View it on 
        </p>
        <p className={ `${styles.btnText} font-bold text-sm`} fon>
          Expo store
        </p>

      </div>
      </div>
  )
}

export default Button 