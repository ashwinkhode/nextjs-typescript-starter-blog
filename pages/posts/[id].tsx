import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../utils/posts'
import Head from 'next/head'
import Date from '../../components/date'

export default function Post({ postData }: any) {
  console.log(postData)
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className=" headingxl">{postData.title}</h1>
        <div className="lightText">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

type Params = {
  params : {
    id: string;
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}