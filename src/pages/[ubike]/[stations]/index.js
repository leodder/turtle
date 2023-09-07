import { useState, useEffect } from 'react';
import ResponsiveAppBar from '/components/navbar.js';
import { useRouter } from 'next/router';

//component
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
  // const [jsonData, setJsonData] = useState(null);
  // const [selectedItems, setSelectedItems] = useState([]);

  // useEffect(() => {
  //   fetch('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       setJsonData(data);
  //       if (Array.isArray(data)) {
  //         const selectedItemsArray = data.map(item => ({
  //           sna: item.sna,
  //           tot: item.tot,
  //           sbi: item.sbi, 
  //           sarea: item.sarea
  //         }));
  //         setSelectedItems(selectedItemsArray);
  //       }
  //     })
  //     .catch(error => console.error('Error fetching JSON:', error));
  // }, []);

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
