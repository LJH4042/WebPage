import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router';
import Layout, {siteTitle} from '../../components/layout'
import info from '../../styles/center.module.css'

export default function CenterInfo(){

    const router = useRouter();

    const handleButtonClick = (path) => {
        router.push(path);
    };

    return(
        <Layout>
            <Head>
                <title>분실물 센터 정보</title>
            </Head>
            <div className={info.container}></div>
            <header className={info.Header}></header>
            <div className={info.logo}>
                <p>분실물 센터</p>
                <h3 className={info.logo1}>주소: 중부대학교</h3>
                <h3 className={info.logo2}>연락처: 02-XXX-XXXX</h3>
             </div>
             <input className={info.Button} type="button" value="이전" onClick={() => handleButtonClick('/posts/QRcheck')}></input>
        </Layout>
    )
}