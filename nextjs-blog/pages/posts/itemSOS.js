import Link from 'next/link'
import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import sos from '../../styles/itemSOS.module.css'

export default function ItemSos(){
    return(
        <Layout>
            <Head>
                <title>분실 신고</title>
            </Head>
            <div className={sos.container}>
                <header className={sos.Header}></header>
                <div className={sos.logo}>
                    <p>분실 신고</p>
                </div>
                <form>
                    <p className={sos.dateP}><strong>날짜</strong></p>
                    <div className={sos.inputBox}>
                        <input className={sos.date} type="text" placeholder="날짜" required></input>
                    </div>
                    <p className={sos.locP}><strong>장소</strong></p>
                    <div className={sos.inputBox}>
                        <input className={sos.loc} type="text" placeholder="장소" required></input>
                    </div>
                    <p className={sos.etcP}><strong>특이사항</strong></p>
                    <div className={sos.inputBox}>
                        <textarea className={sos.etc} cols="32" rows="8"></textarea>
                    </div>
                    <input className={sos.Button} type="submit" value="신고" onClick={() => confirm('분실 신고 하시겠습니까?')}></input>
                </form>
            </div>
        </Layout>
    )
}