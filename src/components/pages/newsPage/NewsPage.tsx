import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { fetchNews, deleteNews } from '../../../store/reducers/newsSlice';
import { useTranslation } from 'react-i18next';

const NewsPage = () => {
  const dispatch = useDispatch();
  const news = useSelector((state: RootState) => state.news);
  const [page, setPage] = useState(1);
  const { t } = useTranslation();

  const handleLoadMore = () => {
    dispatch(fetchNews(page + 1));
    setPage(page + 1);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteNews(id));
  };

  return (
    <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}>
      <h1>{t('newsPage')}</h1>
      <div>
        <ul>
          {news.data.map((item: any) => (
            <li style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", margin: 5}} key={item.id}>
              {item.title}{' '}
              <Button key={item.id} style={{ margin: 5 }} variant="outlined" onClick={() => handleDelete(item.id)}>
                {t('delete')}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <Button variant="contained" onClick={handleLoadMore}>
        {t('loadMore')}
      </Button>
    </div>
  );
}

export default NewsPage;
