import { useState, useEffect } from 'react';
// import ResponsiveAppBar from '/components/navbar.js';
import { useRouter } from 'next/router';

//component
import ResponsiveAppBar from '/components/navbar.js';
import Aline from '/components/aline.js'
import Form from '/components/form.js'
import CustomizedTables from 'components/table.js'

function PublicJSONPage() {
  const router = useRouter();
  // const { ubike, stations } = router.query;
  const keyword = router.query.keyword || ''
  // console.log('ubike:', ubike);
  // console.log('stations:', stations);
  // console.log('keyword:', keyword)

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <ResponsiveAppBar />
      <Aline />
      <Form />
      <CustomizedTables keyword={keyword} />
    </div>
  );
}

export default PublicJSONPage;
