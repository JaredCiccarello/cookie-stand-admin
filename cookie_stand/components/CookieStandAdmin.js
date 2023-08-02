import Head from '@/components/Head/';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export default function Home({ locations = 0 }) {
  return (
    <div>
      {/* { Head } */}
      <Head />

      {/* Header */}
      <Header />

      {/* Main */}
      <Main />

      {/* Footer */}
      <Footer />
    </div>
  )
}

