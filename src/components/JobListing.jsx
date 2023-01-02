import "../styles/jobListing.scss";
const JobListing = ({ job, filterTags, setFilterTags }) => {
  const {
    company,
    contract,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    location,
    languages,
    tools,
  } = job;

  const tags = [role, level, ...languages, ...tools];

  //function to add filters to the filter array
  const addFilter = (tag) => {
    if (!filterTags.includes(tag)) {
      const filters = [...filterTags, tag];
      setFilterTags(filters);
    }
  };

  return (
    <article className="jobListing">
      <div className="company">
        <div className="logo">
          <img src={logo} alt={company} />
        </div>
        <div className="details">
          <div className="details_minor">
            <div className="company_name">{company}</div>
            <div>{job.new ? <div className="btn new">New!</div> : ""}</div>
            <div>
              {featured ? <div className="btn featured">Featured</div> : ""}
            </div>
          </div>
          <div className="position">
            <span>{position}</span>
          </div>
          <div className="details_end">
            <span>{postedAt}</span> <span className="dot">.</span>{" "}
            <span>{contract}</span> <span className="dot">.</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div className="line_break"></div>
      <div className="tags">
        {tags.length > 0
          ? tags.map((tag, index) => (
              <span className="tag" key={index} onClick={() => addFilter(tag)}>
                {tag}
              </span>
            ))
          : ""}
      </div>
    </article>
  );
};

export default JobListing;
