import Head from 'next/head'
import Image from 'next/image'
import AppNavBar from '../components/AppNavBar'
import AppCardBullets from '../components/AppCardBullets'


let title = "My first WebApp";

const bulletsToday = [
  {
    type:'event',
    title:'event title',
  },
  {
    type:'task',
    title:'task title 1',
  },
  {
    type:'task',
    title:'task title 2',
  },
  {
    type:'task',
    title:'task title 3',
  }
];

const bulletsTomorrow = [
  {
    type:'event tomorrow',
    title:'event title',
  },
  {
    type:'task tomorrow',
    title:'task title 1',
  },
  {
    type:'task tomorrow',
    title:'task title 2',
  },
  {
    type:'task tomorrow',
    title:'task title 3',
  }
];
export default function Home() {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AppNavBar title={title}></AppNavBar>
        <AppCardBullets date={'19/09/2021'} bullets={bulletsToday}></AppCardBullets>
        <AppCardBullets date={'20/09/2021'} bullets={bulletsTomorrow}></AppCardBullets>
      </main>
    </div>
  )
}
