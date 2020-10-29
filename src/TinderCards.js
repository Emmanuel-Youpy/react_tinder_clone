import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "./firebase";

function TinderCards() {
  const [people, setPeople] = useState([
    // {
    //   name: "Youpil",
    //   url:
    //     "https://media.pitchfork.com/photos/5ef210348813ffa92664e461/4:3/w_1588,h_1191,c_limit/Burna-Boy.jpg",
    // },
    // {
    //   name: "Sam Davis",
    //   url:
    //     "https://image-cdn.essentiallysports.com/wp-content/uploads/20200816215220/soulja-boy-hand.jpg",
    // },
  ]);

  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshop) =>
        setPeople(snapshop.docs.map((doc) => doc.data()))
      );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
