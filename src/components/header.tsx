import {styles} from './Header.module.css'

export function Header(){
    return (
        <>
            <div>
                <h1 className={styles.logoText}>todo</h1>
            </div>
        </>
    )
}