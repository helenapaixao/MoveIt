import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/helenapaixao.png" alt="Helena Paixão" />
      <div>
        <strong>Helena Paixão</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}
