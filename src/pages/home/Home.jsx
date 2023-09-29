//import styles from './Home.module.scss';

import { Header } from '../../components/Header/Header';
import Banner from './components/Banner/Banner';

import { Layout } from 'antd';

const { Content } = Layout;

function Home() {
  return (
    <>
      <Header></Header>
      <Content>
        <Banner />
      </Content>
    </>
  );
}

export default Home;
