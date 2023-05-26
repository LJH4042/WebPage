import Link from 'next/link'
import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import register from '../../styles/register.module.css'

export default function Register(){
    return(
        <Layout>
            <Head>
                <title>회원가입</title>
            </Head>
            <div className={register.container}>
                <header className={register.Header}></header>
                <div className={register.logo}>
                    <p>회원가입</p>
                </div>
                <form>
                    <p className={register.nameP}><strong>이름</strong></p>
                    <div className={register.inputBox}>
                        <input className={register.name} type="text" placeholder="이름" required></input>
                    </div>
                    <p className={register.idP}><strong>아이디</strong></p>
                    <div className={register.inputBox}>
                        <input className={register.id} type="text" placeholder="ID" required></input>
                    </div>
                    <p className={register.pwdP}><strong>비밀번호</strong></p>
                    <div className={register.inputBox}>
                        <input className={register.pwd} type="password" placeholder="비밀번호" required></input>
                    </div>
                    <p className={register.telP}><strong>연락처</strong></p>
                    <div className={register.inputBox}>
                        <input className={register.tel} type="tel" placeholder="010-0000-0000" required></input>
                    </div>
                    <p className={register.typeP}><strong>사용자 구분</strong></p>
                    <div className={register.SelectBox}>
                        <select className={register.SelectList}>
                            <option>---------</option>
                            <option>고객</option>
                            <option>관리자</option>
                            <option>게스트</option>
                        </select>
                    </div>
                    <input className={register.Button} type="submit" value="회원가입" onClick={() => confirm('회원가입 하시겠습니까?')}></input>
                </form>
            </div>
        </Layout>
    )
}