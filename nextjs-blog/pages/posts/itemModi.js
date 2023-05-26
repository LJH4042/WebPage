import Link from 'next/link'
import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import item from '../../styles/itemRegister.module.css'

export default function ItemRegister(){
    return(
        <Layout>
            <Head>
                <title>물품 수정</title>
            </Head>
            <div className={item.container}>
                <header className={item.Header}></header>
                <div className={item.logo}>
                    <p>물품 수정</p>
                </div>
                <form>
                    <p className={item.nameP}><strong>물품명</strong></p>
                    <div className={item.inputBox}>
                        <input className={item.name} type="text" placeholder="물품명" required></input>
                    </div>
                    <p className={item.typeP}><strong>유형</strong></p>
                    <div className={item.SelectBox}>
                        <select className={item.SelectList}>
                            <option>---------</option>
                            <option>전자기기</option>
                            <option>신분증</option>
                            <option>액세서리</option>
                            <option>의류</option>
                            <option>지갑</option>
                            <option>열쇠</option>
                        </select>
                    </div>
                    <p className={item.sizeP}><strong>규격</strong></p>
                    <div className={item.SelectBox}>
                        <select className={item.SelectList}>
                            <option>---------</option>
                            <option>대</option>
                            <option>중</option>
                            <option>소</option>
                        </select>
                    </div>
                    <p className={item.moneyP}><strong>가격</strong></p>
                    <div className={item.inputBox}>
                        <input className={item.money} type="text" placeholder="가격" required></input>
                    </div>
                    <p className={item.colorP}><strong>색상</strong></p>
                    <div className={item.inputBox}>
                        <input className={item.color} type="text" placeholder="색상" required></input>
                    </div>
                    <p className={item.makerP}><strong>제조사</strong></p>
                    <div className={item.inputBox}>
                        <input className={item.maker} type="text" placeholder="제조사" required></input>
                    </div>
                    <p className={item.dateP}><strong>등록 일자</strong></p>
                    <div className={item.inputBox}>
                        <input className={item.date} type="text" placeholder="등록 일자" required></input>
                    </div>
                    <input className={item.Button} type="submit" value="등록" onClick={() => confirm('수정 하시겠습니까?')}></input>
                </form>
            </div>
        </Layout>
    )
}