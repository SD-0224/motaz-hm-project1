import React from "react";

const SubTopics = ({ item }) => {
  return (
    <section className="sub-topics-container">
      <h2 className="sub-topics-header" id="sub-topics-header">
        {item ? item.topic + " Sub Topics" : "________"}
      </h2>
      <ul id="sub-topics-list">
        {item
          ? item.subtopics.map((topic, index) => {
              return (
                <li key={index} className="sub-topic">
                  <ion-icon class="sub-topic-icon" name="checkmark-circle-outline"></ion-icon>
                  <h3 className="sub-tobic-header">{topic}</h3>
                </li>
              );
            })
          : ""}
      </ul>
    </section>
  );
};

export default SubTopics;
