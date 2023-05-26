import Link from 'next/link'
import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import login from '../../styles/login.module.css'

export default function Login(){
    return(
        <Layout>
            <Head>
                <title>로그인</title>
            </Head>
            <div className={login.container}>
                <header className={login.Header}></header>
                <div className={login.logo}>
                    <p>LOGIN</p>
                    <h4 className={login.logo1}>EXPETO에 오신 것을 환영합니다.</h4>
                    <h4 className={login.logo2}>서비스를 이용하시고 싶으시면 로그인을 해주세요.</h4>
                </div>
                <form>
                    <p className={login.idP}><strong>아이디</strong></p>
                    <div className={login.inputBox}>
                        <input className={login.id} type="text" placeholder="ID" required></input>
                    </div>
                    <p className={login.pwdP}><strong>비밀번호</strong></p>
                    <div className={login.inputBox}>
                        <input className={login.pwd} type="password" placeholder="비밀번호" required></input>
                    </div>
                    <p className={login.make}><strong>계정이 없으신가요? </strong><Link href="/posts/register">회원가입</Link></p>
                    <input className={login.Button} type="submit" value="Login"></input>
                </form>
            </div>
        </Layout>
    )
}