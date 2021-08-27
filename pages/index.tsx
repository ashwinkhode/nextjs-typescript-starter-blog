import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../utils/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next';

export type PostData = {
  date: string;
  id: string;
  title: string;
}

export type HomeProps = {
  allPostsData: PostData[];
}

export default function Home({ allPostsData }: HomeProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className=" headingmd">
        <p>
          Hello, I’m <strong>Ashwin</strong>. I’m a software engineer and I design things too.
          You can contact me on{' '}
          <a href="https://twitter.com/ashwin4real">Twitter</a>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p>
          S/o to <a href='https://twitter.com/omkar_k45'>
            @omkar_k45
            </a>
           {", "}
            <a href='https://twitter.com/codetastic1'>
             @codetastic1
            </a>
           {", & "}
            <a href='https://twitter.com/iamblue175'>
             @iamblue175
            </a>
        </p>
      </section>
      <section className=" headingmd padding1px">
        <h2 className=" headinglg">Blog</h2>
        <ul className="list">
          {allPostsData.map(({ id, date, title }) => (
            <li className="listItem" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className="lightText">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}