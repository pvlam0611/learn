import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'



export default function Home() {
  const router = useRouter();
  const handleNavigate = () => {
    router.push('blog/1')
  }

return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <button onClick={handleNavigate}>Click me</button>
        <section className={utilStyles.headingMd}>
        <Link href="/posts/first-post">
        <img src="/images/defend_Adam_Vilimek_shutterstock.webp">
        </img>
        </Link>
        <h1>
          <Link href="/posts/first-post">
          7 Steps to Take Right Now to Prepare for Cyberattacks by Russia
          </Link>
        </h1>
        <p>
          <Link href="/posts/first-post">
          A lot of the recommended preparation involves measures organizations should have in place already.
          </Link>
        </p>
        <Link href="/posts/first-post">
        <img src="/images/defend_Adam_Vilimek_shutterstock.webp">
        </img>
        </Link>
        <h1>
          <Link href="/posts/first-post">
          7 Steps to Take Right Now to Prepare for Cyberattacks by Russia
          </Link>
        </h1>
        <p>
          <Link href="/posts/first-post">
          A lot of the recommended preparation involves measures organizations should have in place already.
          </Link>
        </p>
        <Link href="/posts/first-post">
        <img src="/images/defend_Adam_Vilimek_shutterstock.webp">
        </img>
        </Link>
        <h1>
          <Link href="/posts/first-post">
          7 Steps to Take Right Now to Prepare for Cyberattacks by Russia
          </Link>
        </h1>
        <p>
          <Link href="/posts/first-post">
          A lot of the recommended preparation involves measures organizations should have in place already.
          </Link>
        </p>
        <Link href="/posts/first-post">
        <img src="/images/defend_Adam_Vilimek_shutterstock.webp">
        </img>
        </Link>
        <h1>
          <Link href="/posts/first-post">
          7 Steps to Take Right Now to Prepare for Cyberattacks by Russia
          </Link>
        </h1>
        <p>
          <Link href="/posts/first-post">
          A lot of the recommended preparation involves measures organizations should have in place already.
          </Link>
        </p>
        <Link href="/posts/first-post">
        <img src="/images/defend_Adam_Vilimek_shutterstock.webp">
        </img>
        </Link>
        <h1>
          <Link href="/posts/first-post">
          7 Steps to Take Right Now to Prepare for Cyberattacks by Russia
          </Link>
        </h1>
        <p>
          <Link href="/posts/first-post">
          A lot of the recommended preparation involves measures organizations should have in place already.
          </Link>
        </p>
        <Link href="/posts/first-post">
        <img src="/images/defend_Adam_Vilimek_shutterstock.webp">
        </img>
        </Link>
        <h1>
          <Link href="/posts/first-post">
          7 Steps to Take Right Now to Prepare for Cyberattacks by Russia
          </Link>
        </h1>
        <p>
          <Link href="/posts/first-post">
          A lot of the recommended preparation involves measures organizations should have in place already.
          </Link>
        </p>
      </section>
    </Layout>
  )
}