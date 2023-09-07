import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState, useContext } from 'react'
// styles
import styles from './search.module.sass';

//icon
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  const router = useRouter();
  const [keyword, setKeyword] = React.useState(
    router.query.keyword ? router.query.keyword : ''
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value;
    router.push(`/ubike/stations?keyword=${keyword}`);
  };

  return (
    <div>
      <form role="search" onSubmit={handleSubmit} className={`${styles.formmargin}`}>
      <div>
        <input
          className={`${styles.input}`}  
          type="search"
          placeholder="站點搜尋"
          aria-label="站點搜尋"
          name="keyword"
          value={keyword} 
          onChange={(e) => setKeyword(e.target.value)}             
        />
        {/* <SearchIcon className={`${styles.search}`} /> */}
        {/* <button type="submit">搜尋</button> */}
        </div>
      </form>
    </div>
  );
}

