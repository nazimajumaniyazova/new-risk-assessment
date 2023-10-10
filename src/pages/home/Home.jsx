import styles from './Home.module.scss';

import { Typography } from 'antd';
import { Divider, Layout } from 'antd';

import { Header } from '../../components/Header/Header';
import Banner from './components/Banner/Banner';
import { Button } from './components/Button/Button';

import {
  Chart,
  Diagram,
  TrendDown,
  Profile2User,
  ReceiptSearch,
  Notepad2,
  NoteFavorite,
  Calculator,
  Activity,
  SecuritySafe,
  Screenmirroring,
  ArrangeHorizontal,
  Reserve,
} from 'iconsax-react';
import { useTranslation } from 'react-i18next';
import AvatarButton from './components/AvatarButton/AvatarButton';

const { Title } = Typography;
const { Content } = Layout;

const menuList = [
  {
    name: 'Отчеты',
    menus: [
      {
        title: 'Дашборды',
        icon: <Chart />,
        route: '/dashboards',
      },
      {
        title: 'Кредитные риски',
        icon: <TrendDown />,
        route: '/dashboards',
      },
      {
        title: 'Риски ликвидности',
        icon: <Diagram />,
        route: '/dashboards',
      },
      {
        title: 'Операционные риски',
        icon: <Profile2User />,
        route: '/dashboards',
      },
      {
        title: 'Комплаенс',
        icon: <ReceiptSearch />,
        route: '/dashboards',
      },
      {
        title: 'Бизнес план',
        icon: <Notepad2 />,
        route: '/dashboards',
      },
    ],
  },
  {
    name: 'Документооборот',
    menus: [
      {
        title: 'Заявления-анкета',
        icon: <NoteFavorite />,
        route: '/dashboards',
      },
      {
        title: 'Кредитный мониторинг',
        icon: <Screenmirroring />,
        route: '/dashboards',
      },
      {
        title: 'Оценка залога',
        icon: <Calculator />,
        route: '/dashboards',
      },
      {
        title: 'Проблемные активы',
        icon: <Activity />,
        route: '/dashboards',
      },
      {
        title: 'Страхования',
        icon: <SecuritySafe />,
        route: '/dashboards',
      },
    ],
  },
  {
    name: 'Сервисы',
    menus: [
      {
        title: 'API сервисы',
        icon: <ArrangeHorizontal />,
        route: '/dashboards',
      },
      {
        title: 'Service Desk',
        icon: <Reserve />,
        route: '/dashboards',
      },
    ],
  },
];

function Home() {
  const { t } = useTranslation('homePage');
  return (
    <>
      <Header props={<AvatarButton />} />
      <Content>
        <Banner />
        <section className={styles.wrapper}>
          {menuList.map((item, index) => (
            <div key={index}>
              <Title level={4}>{t(item.name)}</Title>

              <Divider />

              <div className={styles.menu}>
                {item.menus.map((menuItem, index) => (
                  <Button
                    route={menuItem.route}
                    icon={menuItem.icon}
                    key={index}
                    text={menuItem.title}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </Content>
    </>
  );
}

export default Home;
