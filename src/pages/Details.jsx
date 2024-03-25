import React, { useEffect, useState } from "react";
import DetailsCard from "../components/details/DetailsCard";
import DetailsContent from "../components/details/DetailsContent";
import SubTopics from "../components/details/SubTopics";
import "../components/details/styles/Details.css";
import { fetchData } from "../utilities/fetch";

import { useParams } from "react-router-dom";

const Details = () => {
  const [item, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    const path = `https://tap-web-1.herokuapp.com/topics/details/${id}`;
    (async () => {
      setItem(await fetchData(path));
    })();
  }, [id]);

  return (
    <main>
      <div className="gray-backdrop"></div>
      <section className="details-container">
        <DetailsContent item={item} />
        <DetailsCard item={item} addFav={addFavourite} />
        <SubTopics item={item} />
      </section>
    </main>
  );
};

const addFavourite = (id) => {
  console.log(id);
};

export default Details;
