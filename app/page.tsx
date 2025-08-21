import styles from "./home.module.css";

export default function Home() {
    return (
        <div className={styles.backgroundGradient}>
            <div className={styles.centerContainer}>
                <div className={styles.massiveTitle}>NML</div>
                <div className={styles.subheading}>Under Construction</div>
            </div>
        </div>
    );
}
