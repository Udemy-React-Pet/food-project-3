import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getAllCategories } from '../api';

import Preloader from '../components/Preloader';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();
	
  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
				// В случае, если search есть, каталог отфильтруется, иначе вернём базовый вариант
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split('=')[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <React.Fragment>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </React.Fragment>
  );
}

export default Home;
