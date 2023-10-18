import React, { useEffect } from 'react'
import styles from '../../styles/Resume.module.css'
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Languages = () => {
    const { width } = useWindowDimensions();
    useEffect(() => {
        //console.log(`Your window is ${width} pixels wide.`)
        const numChildren = document.getElementById("languageContainer").children.length;
        let respaceRow = null;
        let languageBox = document.getElementsByClassName("languageBox");
        let yCordPositions = [];
        let instCounter = {};

        function countRows(reset) {
            respaceRow = null;
            
            //Creates an array of the y coordinates for each language box.
            for (let n = 0; n < numChildren; ++n) {
                let langBox = languageBox[n].getBoundingClientRect();
                yCordPositions.push(langBox.y);
            }

            //Creates an object representing the amount of rows and how many elements are in each.
            yCordPositions.forEach(i => {
                if (instCounter[i]) {
                    instCounter[i] += 1;
                } else {
                    instCounter[i] = 1;
                }
            })
            if (reset) {
                yCordPositions = [];
                for (let key in instCounter) {
                    delete instCounter[key]
                }
            }
        }
        countRows();

        //Checks if any rows have more than 2 fewer elements than the row above it.
        let row = Object.values(instCounter);
        if (row.length > 1) {
            for (let key = 0; key < row.length; ++key) {
                (key === 0
                ) ? (
                    (row[0] - row[1] > 1) && (respaceRow = 0)
                ) : (
                    row[key - 1] - row[key] > 1) && (respaceRow = (key - 1));
            }
        }

        //Changes the col width of the elements in the respace row based on the sum difference between the objects in the 2 rows.
        while (respaceRow !== null) {
            let rowLen = Object.values(instCounter)[respaceRow + 1];
            let respaceRowLen = Object.values(instCounter)[respaceRow];
            let respaceDivider = respaceRowLen - Math.floor((respaceRowLen - rowLen) / 2);
            let startIndex = 0;

            for (let i = 0; i < respaceRow; ++i) {
                startIndex = startIndex + Object.values(instCounter)[i];
            }
            
            for (let e = startIndex; e < (startIndex + respaceDivider); ++e) {
                const classList = languageBox[e].classList;
                for (let i = 0; i < classList.length; ++i) {
                    const className = classList[i];
                    if (className.startsWith("col")) {
                        classList.remove(className);
                    }
                }
                languageBox[e].classList.add(`col-${Math.floor(12 / respaceDivider)}`);
                
            }

            countRows(0);
        }
    }, [width])

    return (
        <div className="row">
            <div className="col-10 offset-1">
                <br className="d-none d-lg-block"></br>
                <h4>Languages</h4>
                <div id="languageContainer" className="row">
                    <div className={`${styles.languageBox} ${styles.spokenLanguage} col languageBox`}>
                        English
                    </div>
                    <div className={`${styles.languageBox} ${styles.spokenLanguage} col languageBox`}>
                        Swedish
                    </div>
                    <div className={`${styles.languageBox} ${styles.frontendLanguage} col languageBox`}>
                        HTML
                    </div>
                    <div className={`${styles.languageBox} ${styles.frontendLanguage} col languageBox`}>
                        CSS
                    </div>
                    <div className={`${styles.languageBox} ${styles.frontendLanguage} col languageBox`}>
                        JavaScript
                    </div>
                    <div className={`${styles.languageBox} ${styles.frontendLanguage} col languageBox`}>
                        TypeScript
                    </div>
                    <div className={`${styles.languageBox} ${styles.backendLanguage} col languageBox`}>
                        Python
                    </div>
                    <div className={`${styles.languageBox} ${styles.backendLanguage} col languageBox`}>
                        Java
                    </div>
                    <div className={`${styles.languageBox} ${styles.backendLanguage} col languageBox`}>
                        SQL
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Languages