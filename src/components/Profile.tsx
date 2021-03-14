import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level}  = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1323815172205617153/NuGwGq9h_400x400.jpg"
                        alt ="Pedro Tavolaro" />

            <div>
                <strong>
                    Pedro Tavolaro
                </strong>
                <p>
                    <img src="icons/level.svg" alt="lvl"/>
                    Level {level}
                    </p>
            </div>
        </div>
    )
}