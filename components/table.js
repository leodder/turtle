import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// hook
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

// styles
import styles from './table.module.sass';

//RWD
// import { useMediaQuery } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#B5CC22',
    color: '#ffffff',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },

  'td,th': {
    border: 0,
  },
}));

export default function CustomizedTables({ keyword }) {
  const router = useRouter()
  const [jsonData, setJsonData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  // const isXsScreen = useMediaQuery('(max-width:389px)'); // 定義 xs 螢幕尺寸的最大寬度


  useEffect(() => {
    fetch('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json')
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
        filterDataByKeyword(data, keyword); // 過濾
      })
      .catch((error) => console.error('Error fetching JSON:', error));
  }, [keyword]); // 當關鍵字發生變化時重新獲取數據和當關鍵字發生變化時過濾數據

  // 搜尋關鍵字之函數
  const filterDataByKeyword = (data, keyword) => {
    if (!keyword) {
      setFilteredData(data); // 沒有關鍵字，顯示所有數據
      return;
    }

    const filteredResults = data.filter((item) =>
      item.sna.toLowerCase().includes(keyword.toLowerCase()) ||
      item.sarea.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  return (
    <div className={`${styles.bgcolor}`}>
      <TableContainer component={Paper} className={`${styles.tablecontainer}`}>
        <Table  aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" className={`${styles.thead}`}>縣市</StyledTableCell>
              <StyledTableCell align="center" className={`${styles.thead}`}>區域</StyledTableCell>
              <StyledTableCell align="center" className={`${styles.thead}`}>站點名稱</StyledTableCell>
              <StyledTableCell align="center" className={`${styles.theadxs}`}>可借車輛</StyledTableCell>
              <StyledTableCell align="center" className={`${styles.theadxs}`}>可還空位</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData &&
              filteredData.map((data, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="center" className={`${styles.tbody}`}><span className={`${styles.tbodyrwd}`}>台北市</span></StyledTableCell>
                  <StyledTableCell align="center" className={`${styles.tbody}`}><span className={`${styles.tbodyrwd}`}>{data.sarea}</span></StyledTableCell>
                  <StyledTableCell align="center" className={`${styles.tbodysna}`}><span className={`${styles.tbodysnarwd}`}>{data.sna}</span></StyledTableCell>
                  <StyledTableCell align="center" className={`${styles.tbodyColor}`}>{data.tot}</StyledTableCell>
                  <StyledTableCell align="center" className={`${styles.tbodyColor}`}>{data.sbi}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
