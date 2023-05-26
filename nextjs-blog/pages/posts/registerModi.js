import Link from 'next/link'
import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import regimodi from '../../styles/registerModi.module.css'

export default function RegisterModi(){
    return(
        <Layout>
            <Head>
                <title>회원 정보 수정</title>
            </Head>
            <div className={regimodi.container}>
                <header className={regimodi.Header}></header>
                <div className={regimodi.logo}>
                    <p>회원정보 수정</p>
                </div>
                <form>
                    <p className={regimodi.nameP}><strong>이름</strong></p>
                    <div className={regimodi.inputBox}>
                        <input className={regimodi.name} type="text" placeholder="이름" required></input>
                    </div>
                    <p className={regimodi.pwdP}><strong>비밀번호</strong></p>
                    <div className={regimodi.inputBox}>
                        <input className={regimodi.pwd} type="password" placeholder="비밀번호" required></input>
                    </div>
                    <p className={regimodi.telP}><strong>연락처</strong></p>
                    <div className={regimodi.inputBox}>
                        <input className={regimodi.tel} type="tel" placeholder="010-0000-0000" required></input>
                    </div>
                    <input className={regimodi.Button} type="submit" value="수정" onClick={() => confirm('회원수정 하시겠습니까?')}></input>
                </form>
            </div>
        </Layout>
    )
}