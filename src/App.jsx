import axios from "axios";
import React, { useEffect, useState } from "react";
import { FilterDisplay, JobListing } from "./components";
import "./styles/app.scss";

const App = () => {
  const [data, setData] = useState([]);
  const [filterTags, setFilterTags] = useState([]);

  //get data upon page load and set state
  useEffect(() => {
    axios.get("/db/data.json").then((res) => setData(res.data));
  }, []);

  const filterJobs = ({ languages, level, role, tools }) => {
    const tags = [...languages, level, role, ...tools];
    return filterTags.every((filter) => tags.includes(filter));
  };

  const filteredJobs = data.filter(filterJobs);

  return (
    <main className="app">
      <section className="app__header">
        {filterTags.length > 0 ? (
          <FilterDisplay
            filterTags={filterTags}
            setFilterTags={setFilterTags}
          />
        ) : (
          <></>
        )}
      </section>
      <section className="app__display">
        {filteredJobs.map((job, index) => (
          <JobListing
            key={index}
            data={data}
            job={job}
            filterTags={filterTags}
            setFilterTags={setFilterTags}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
