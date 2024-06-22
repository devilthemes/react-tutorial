import styles from "./style.module.scss"
export const ComponentA = ()=>{
    return (
        <div className={styles.block}>
                <h3 className={styles.h3}>News title here - Component A</h3>
                <p>
                    this is my content goers here.
                </p>
        </div>
    )
}