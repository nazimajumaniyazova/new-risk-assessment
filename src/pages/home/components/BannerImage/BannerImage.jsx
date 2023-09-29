import highlight_dark from './assets/highlight_dark.svg';
import highlight_light from './assets/highlight_light.svg';
import card_dark from './assets/card_dark.svg';
import card_light from './assets/card_light.svg';

import styles from './BannerImage.module.scss';
import useTheme from '../../../../theme/useTheme';

export const BannerImage = () => {
  const { darkMode } = useTheme();

  return (
    <div className={styles.images}>
      {darkMode ? (
        <img
          src={highlight_dark}
          alt={'highlight'}
          width={40}
          draggable={false}
          className={`${styles.highlight} user_select_none`}
        />
      ) : (
        <img
          src={highlight_light}
          alt={'highlight'}
          width={40}
          draggable={false}
          className={`${styles.highlight} user_select_none`}
        />
      )}

      {!darkMode ? (
        <img
          src={card_light}
          alt={'card_light'}
          width={500}
          draggable={false}
          className={`${styles.img} user_select_none`}
        />
      ) : (
        <img
          src={card_dark}
          alt={'card_dark'}
          width={500}
          draggable={false}
          className={`${styles.img} user_select_none`}
        />
      )}
    </div>
  );
};
