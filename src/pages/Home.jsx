import React, { useEffect, useRef, useState } from "react";
import ArticlesList from "../components/home/ArticlesList";
import Searchbar from "../components/home/Searchbar";
import { fetchData } from "../utilities/fetch";
import { useDebounce } from "../hooks/useDebounce";

const path = "https://tap-web-1.herokuapp.com/topics/list";

const Home = () => {
  const [data, setData] = useState([]);
  const [filterCategories, setFilterCategories] = useState([]);
  const isInit = useRef(false);

  const [searchPhrase, setSearchPhrase] = useState(null);
  const debouncedSearchPhrase = useDebounce(searchPhrase, 300);

  const [filterPhrase, setFilterPhrase] = useState(null);
  const [sortPhrase, setSortPhrase] = useState(null);

  useEffect(() => {
    (async () => {
      setData(await fetchData(path));
    })();
  }, []);

  useEffect(() => {
    if (data.length > 0 && !isInit.current) {
      setFilterCategories(getCategories(data));
      isInit.current = true;
    }
  }, [data]);

  useEffect(() => {
    (async () => {
      if (debouncedSearchPhrase || debouncedSearchPhrase === "") {
        setData(await onSearch(debouncedSearchPhrase));
      }
    })();
  }, [debouncedSearchPhrase]);

  let viewData = data;

  if (filterPhrase) {
    viewData = onFilter(data, filterPhrase);
  }
  if (sortPhrase) {
    viewData = onSort(data, sortPhrase);
  }

  return (
    <main className="main def-pad">
      <Searchbar
        categories={filterCategories}
        dataHandle={{ setFilterPhrase, setSortPhrase, setSearchPhrase }}
      />
      <ArticlesList data={viewData} />
    </main>
  );
};

export default Home;

const getCategories = (data) => {
  if (data) {
    const categorySet = new Set();
    data.map((article) => categorySet.add(article.category));

    return [...categorySet].map((category) => {
      return { value: category, text: category };
    });
  }
};

const onSearch = (searchPhrase) => {
  return fetchData(`${path}?phrase=${searchPhrase}`);
};

const onSort = (data, sortPhrase) => {
  let sorted = [];

  if (sortPhrase === "rating") {
    sorted = data.toSorted((a, b) => {
      return b.rating - a.rating;
    });
  } else if (sortPhrase === "id") {
    sorted = data.toSorted((a, b) => {
      return a.id - b.id;
    });
  } else {
    sorted = data.toSorted((a, b) => {
      let textA = a[sortPhrase].toUpperCase();
      let textB = b[sortPhrase].toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  }
  return sorted;
};

const onFilter = (data, filterPhrase) => {
  if (filterPhrase === "id") {
    return data;
  }
  return data.filter((item) => item.category === filterPhrase);
};
