import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { Table } from '@nextui-org/react'
import Layout, {siteTitle} from '../../components/layout'
import home from '../../styles/main.module.css'


export default function Home() {

  const router = useRouter();

  const handleButtonClick = (path) => {
      router.push(path);
  };

  return (
    <Layout>
      <Head>
        <title>마이 페이지</title>
      </Head>
      <div className={home.container}>
        <header className={home.Header}>
          <div className={home.logo}>
            <h1>EXPETO</h1>
          </div>
          <nav className={home.Nav}>
            <Link href="/posts/registerModi">회원수정</Link>
            <Link href="/" onClick={() => confirm('로그아웃 하시겠습니까?')}>로그아웃</Link>
          </nav>
        </header>
        <h1 className={home.mainP}>내 물품</h1>
        <div>
          <Table>
            <Table.Header>
              <Table.Column width={150}>사진</Table.Column>
              <Table.Column width={130}>일련번호</Table.Column>
              <Table.Column width={100}>이름</Table.Column>
              <Table.Column width={100}>유형</Table.Column>
              <Table.Column width={100}>제조사</Table.Column>
              <Table.Column width={100}>가격</Table.Column>
              <Table.Column width={130}>색상</Table.Column>
              <Table.Column width={130}>QR</Table.Column>
              <Table.Column width={90}>수정</Table.Column>
              <Table.Column width={90}>삭제</Table.Column>
              <Table.Column>신고</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell><input className={home.Button2} type="button" value="수정" onClick={() => handleButtonClick('/posts/itemModi')}></input></Table.Cell>
                <Table.Cell><input className={home.Button2} type="button" value="삭제" onClick={() => confirm('목록에서 삭제하시겠습니까?')}></input></Table.Cell>
                <Table.Cell><input className={home.Button2} type="button" value="신고" onClick={() => handleButtonClick('/posts/itemSOS')}></input></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <input className={home.Button} type="button" value="등록" onClick={() => handleButtonClick('/posts/itemRegister')}></input>
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
