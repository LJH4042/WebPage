import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image';
import Layout, {siteTitle} from '../../components/layout'
import { useRouter } from 'next/router';
import home from '../../styles/QRcheck.module.css'

export default function QRCheck(){

    const router = useRouter();

    const handleButtonClick = (path) => {
        router.push(path);
    };

    return(
        <Layout>
            <Head>
                <title>분실물 확인</title>
            </Head>
            <div className={home.container}>
                <header className={home.Header}>
                    <div className={home.logo}>
                         <h1>EXPETO</h1>
                    </div>
                    <nav className={home.Nav}>
                        <Link href="/posts/login">로그인</Link>
                    </nav>
                </header>
                <main>
                    <h1 className={home.mainH}>분실물을 습득하였습니다.</h1>
                    <Image className={home.Image} src="/path/to/your/image.jpg" alt="lostimage" width={500} height={300} />
                    <p className={home.mainP}>분실물 습득 시 010-1111-1111로 연락주세요.</p>
                    <input className={home.Button} type="button" value="분실 신고" onClick={() => confirm('분실물 발견 신고를 하시겠습니까?')}></input>
                    <input className={home.Button2} type="button" value="분실물 센터" onClick={() => handleButtonClick('/posts/centerInfo')}></input>
                </main>
            </div>  
        </Layout>
    )
}