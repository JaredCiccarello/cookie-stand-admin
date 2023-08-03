import { useState } from "react";
import Head from '@/components/Head/';
import Header from '@/components/Header';
import hours  from '../data';
import Footer from './Footer';
import Main from './Main';

export default function CookieStandAdmin() {
  const [cookieStandData, setCookieStandData] = useState(['test']);

  const handleFormSubmit = (formData) => {
    setCookieStandData([...cookieStandData, formData]);
  };

  return (
    <div>
      {/* { Head } */}
      <Head />

      {/* Header */}
      <Header />
      
      {/* Main */}
      <Main onFormSubmit={handleFormSubmit} data={cookieStandData} />

      {/* Footer */}
      <Footer locations={cookieStandData.length} />
    </div>
  )
}

