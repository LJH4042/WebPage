import Link from 'next/link'
import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import home from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>index</title>
      </Head>
      <div className={home.container}>
        <header className={home.Header}>
          <div className={home.logo}>
            <h1>EXPETO</h1>
          </div>
          <nav className={home.Nav}>
            <Link href="/posts/login">로그인</Link>
            <Link href="/posts/register">회원가입</Link>
          </nav>
        </header>
        <main>
          <p className={home.mainH}>EXPETO 란?</p>
          <p className={home.mainP}>QR코드를 통해 분실물을 찾는 사이트</p>
        </main>
        <footer className={home.Footer}>
          <div className={home.bottom}>
            <Link href="#">EXPETO란?</Link>
            <Link href="#">이용약관</Link>
            <Link href="#">개인정보처리방침</Link>
            <Link href="#">고객센터</Link>
          </div>
        </footer>
      </div>  
    </Layout>
  )
}
