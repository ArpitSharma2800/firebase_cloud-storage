import React, { useState, useEffect } from "react";
import firebase from "../Firebase";

const sort_options = {
  TIME_ASC: { column: "time_seconds", direction: "asc" },
  TIME_DESC: { column: "time_seconds", direction: "desc" },

  TITLE_ASC: { column: "title", direction: "asc" },
  TITLE_DESC: { column: "title", direction: "desc" },
};

function useTimes() {
  const [times, setTimes] = useState([]);
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("times")
      //   .orderBy(sort_options[sortBy].column, sort_options[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newTimes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTimes(newTimes);
      });

    return () => unsubscribe();
  });

  return times;
}

const TimesList = () => {
  const times = useTimes();

  return (
    <div>
      <h2>Times List</h2>
      <ol>
        {times.map((time) => (
          <li key={time.id}>
            <div className="time-entry">{time.title}</div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TimesList;
