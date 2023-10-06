import { Avatar, Card, Dropdown } from 'antd';
import { Logout, User } from 'iconsax-react';
import { Link } from 'react-router-dom';
import styles from './AvatarButton.module.scss';
const { Meta } = Card;

const items = [
  {
    label: (
      <Link className={styles.dropdown_item1} to="/">
        <User size="16" />
        Profil
      </Link>
    ),
    key: '0',
  },
  {
    label: (
      <Link className={styles.dropdown_item2} to="/login">
        <Logout size="16" />
        Chiqish
      </Link>
    ),
    key: '1',
  },
];

const AvatarButton = () => {
  const style = { marginBottom: '-4px', fontSize: '12px', innerHeight: '12px' };

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <div className={styles.avatarButton}>
        <Card
          className={styles.avatarCard}
          bodyStyle={{ padding: '10px 12px' }}
        >
          <Meta
            avatar={
              <Avatar
                size="large"
                style={{
                  backgroundColor: 'orange',
                  verticalAlign: 'middle',
                }}
              >
                N
              </Avatar>
            }
            title={
              <div className={styles.meta_title}>
                <p style={style}>Nursulton</p>
                <p style={style}>Ahmadov</p>
              </div>
            }
            className={styles.meta}
          />
        </Card>
      </div>
    </Dropdown>
  );
};

export default AvatarButton;
