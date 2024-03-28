import React, { useEffect, useState } from "react";
import ArticlesList from "../components/home/ArticlesList";
import Searchbar from "../components/home/Searchbar";
import { fetchData } from "../utilities/fetch";
import { useDebounce } from "../hooks/useDebounce";
import { useData } from "../context/DataContext";

const path = "https://tap-web-1.herokuapp.com/topics/list";

const Home = () => {
  const { data } = useData();
  const [searchedData, setSearchedData] = useState();
  const [filterCategories, setFilterCategories] = useState();

  const [searchPhrase, setSearchPhrase] = useState(null);
  const debouncedSearchPhrase = useDebounce(searchPhrase, 300);

  const [filterPhrase, setFilterPhrase] = useState(null);
  const [sortPhrase, setSortPhrase] = useState(null);

  console.log("render");

  useEffect(() => {
    setSearchedData(data);
    setFilterCategories(getCategories(data));
  }, [data]);

  useEffect(() => {
    (async () => {
      if (debouncedSearchPhrase) {
        setSearchedData(await onSearch(debouncedSearchPhrase));
      } else {
        setSearchedData(data);
      }
    })();
  }, [debouncedSearchPhrase, data]);

  let viewData = searchedData;

  if (filterPhrase) {
    viewData = onFilter(viewData, filterPhrase);
  }

  if (sortPhrase) {
    viewData = onSort(viewData, sortPhrase);
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
  if (!sortPhrase || sortPhrase === "id") {
    return data;
  }
  let sorted = [];

  if (sortPhrase === "rating") {
    sorted = data.toSorted((a, b) => {
      return b.rating - a.rating;
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
  if (!filterPhrase || filterPhrase === "id") {
    return data;
  }
  return data.filter((item) => item.category === filterPhrase);
};
