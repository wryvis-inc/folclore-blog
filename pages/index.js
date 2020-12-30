import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card} title="Find in-depth information about Next.js features and API.">
            <h3>Documentation &rarr;</h3>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card} title="Learn about Next.js in an interactive course with quizzes!">
            <h3>Learn &rarr;</h3>
          </a>
          <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card} title="Discover and deploy boilerplate example Next.js projects.">
            <h3>Examples &rarr;</h3>
          </a>
          <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card} title="Instantly deploy your Next.js site to a public URL with Vercel.">
            <h3>Deploy &rarr;</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          teste deploy #2 (commit 3){' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-4KPLWBPH6X"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-4KPLWBPH6X');
      </script>
    </div>
  )
}
