import { useState } from "react";
import Head from '@/components/Head/';
import Header from '@/components/Header';
import Footer from './Footer';
import Main from './Main';

export default function CookieStandAdmin() {
  const [cookieStandData, setCookieStandData] = useState(['test']);

  const handleFormSubmit = (formData) => {
    setCookieStandData([...cookieStandData, formData]);
  };

  const seattle = {hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]}
  // setCookieStandData([...cookieStandData, seattle])


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

