import styles from "./style.module.css"
export const ComponentB = ()=>{
    return (
        <div className={styles.block}>
                <h3 className={styles.h3}>News title here - Component B</h3>
                <p>
                    this is my content goers here.
                </p>
        </div>
    )
}