import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav>
          <img />
          <a href='/'>Home</a>
          <a href='/events'>Events</a>
          <a href='/about-us'>About us</a>
        </nav>

      </header>


      <main className={styles.main}>
      {data.map(ev => 
      <a href={`/events/${ev.id}`} key={ev.id}>
        {/* <Image src={ev.image} alt={ev.title} width={200} height={200}/> */}
        <img src={ev.image} alt={ev.title} ></img>
        <h2>{ev.title}</h2>
        <p>{ev.description}</p>
      </a>)}

        {/* <a href='/events/london'>
          <img />
          <h2>Events in London</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque lobortis leo, in faucibus lectus congue eu. Donec ac dui fringilla, volutpat orci bibendum, tincidunt ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean augue leo, posuere vitae consequat condimentum, convallis ornare turpis. Pellentesque vel sem turpis. Cras congue, arcu a rutrum mollis, massa sapien aliquet augue, sit amet mattis dui quam sed purus. Maecenas tincidunt vitae massa vel congue. Vivamus et libero ut velit ultricies scelerisque et in purus. Phasellus in faucibus mi, at rutrum libero. Maecenas nisi libero, ornare vel tincidunt at, tristique tempor ante. Aenean convallis maximus nunc ac pretium. Ut dolor lorem, pretium et elit et, sodales posuere enim.</p>  
          </a>
          <a href='/events/vancouver'>
          <img />
          <h2>Events in Vancouver</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque lobortis leo, in faucibus lectus congue eu. Donec ac dui fringilla, volutpat orci bibendum, tincidunt ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean augue leo, posuere vitae consequat condimentum, convallis ornare turpis. Pellentesque vel sem turpis. Cras congue, arcu a rutrum mollis, massa sapien aliquet augue, sit amet mattis dui quam sed purus. Maecenas tincidunt vitae massa vel congue. Vivamus et libero ut velit ultricies scelerisque et in purus. Phasellus in faucibus mi, at rutrum libero. Maecenas nisi libero, ornare vel tincidunt at, tristique tempor ante. Aenean convallis maximus nunc ac pretium. Ut dolor lorem, pretium et elit et, sodales posuere enim.</p>  
          </a>
          <a href='/events/toronto'>
          <img />
          <h2>Events in Toronto</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque lobortis leo, in faucibus lectus congue eu. Donec ac dui fringilla, volutpat orci bibendum, tincidunt ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean augue leo, posuere vitae consequat condimentum, convallis ornare turpis. Pellentesque vel sem turpis. Cras congue, arcu a rutrum mollis, massa sapien aliquet augue, sit amet mattis dui quam sed purus. Maecenas tincidunt vitae massa vel congue. Vivamus et libero ut velit ultricies scelerisque et in purus. Phasellus in faucibus mi, at rutrum libero. Maecenas nisi libero, ornare vel tincidunt at, tristique tempor ante. Aenean convallis maximus nunc ac pretium. Ut dolor lorem, pretium et elit et, sodales posuere enim.</p>  
          </a> */}
      </main>
      <footer className={styles.footer}>
        <p>lorem ipsom</p>
      </footer>
    </>
  )
}

export async function getServerSideProps(){
  const { events_categories } = await import('../data/data.json')
  console.log('events_categories', events_categories)
  return{
      props:{
          data: events_categories
      }
  }
}