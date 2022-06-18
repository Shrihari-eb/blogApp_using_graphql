import Head from 'next/head'
import { Card, Categories, Widget } from '../components/index'
import { getPost } from '../services'
import { FeaturedPosts } from '../sections'

export default function Home({ posts }) {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Talking Point</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <Card post={post.node} key={index} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <Widget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

//fetching data using nextjs
export async function getStaticProps() {
  const posts = (await getPost()) || []

  return {
    props: { posts },
  }
}
