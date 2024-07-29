import "./portfolio.css";

function SpecialsMainPage() {
  document.title = "FadhilAF - Portfolio Page";

  const topics = [
    {
      title: "MIHU (May I Help You)",
      description:
        "Application for providing or giving people that need low skilled hard labor help. Its focused on the NLP model that categorizes \"child sentences\" into identifiable gig category. I helped build the back end, machine learning model, also i learned to deploy using GCP cloud functions. Lastly, I also did manage the project easily with my appreciative and hardworking team.",
      link: "https://www.linkedin.com/posts/fadhilaf_mihu-bangkit-elevator-pitch-activity-7142413660936650752-UDpz?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Studgage",
      description:
        "Working on the Back End system of the social media for student concept, Real-time chat feature using websocket, Authentication system integrated with the real-time chat redis session if online (this was made before redis become closed source -_-)",
      link: "https://github.com/fadhilaf/studgage-backend",
    },
    {
      title: "Protein (English proficiency test prep)",
      description:
        "Working on a full-stack english test prep web application. Admin page to dynamically add the exam test questions (text, image, audio). English Exam page with dynamic components with timer feature, answer save, and score calculation logic. Basic User authentication",
      link: "https://github.com/aziemp66/protein-intel",
    },
  ];

  return (
    <div>
      <div className="title-container">
        <p className="text-2xl font-bold m-8">Portfolio</p>
        <div className="m-auto title-desc">
          Showing some of the projects that I've worked on
        </div>
      </div>
      <div className="topics">
        {topics.map((topic, index) => (
          <div
            className={`topic-container ${index % 2 == 0 ? "topic-container-odd" : "topic-container-even"
              }`}
            key={index}
          >
            {index % 2 == 0 ? (
              <svg
                className="separator-odd"
                viewBox="0 0 900 100"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <path d="M0 48L75 72L150 38L225 38L300 51L375 47L450 22L525 71L600 49L675 66L750 68L825 20L900 59L900 101L825 101L750 101L675 101L600 101L525 101L450 101L375 101L300 101L225 101L150 101L75 101L0 101Z"></path>
              </svg>
            ) : (
              <svg
                className="separator-even"
                viewBox="0 0 900 100"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <path d="M0 77L75 25L150 48L225 32L300 70L375 70L450 27L525 58L600 52L675 76L750 56L825 59L900 56L900 101L825 101L750 101L675 101L600 101L525 101L450 101L375 101L300 101L225 101L150 101L75 101L0 101Z"></path>
              </svg>
            )}
            <div
              className={`p-8 topic ${index % 2 == 0 ? "topic-odd" : "topic-even"
                }`}
            >
              <a target="_blank" href={topic.link}>
                <h3 className="m-auto topic-title">{topic.title}</h3>
                <p className="m-auto topic-desc">{topic.description}</p>
              </a>
            </div>
          </div>
        ))}
        {topics.length % 2 == 1 && (
          <div className="topic-container topic-container-even">
            <svg
              className="separator-even"
              viewBox="0 0 900 100"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
            >
              <path d="M0 77L75 25L150 48L225 32L300 70L375 70L450 27L525 58L600 52L675 76L750 56L825 59L900 56L900 101L825 101L750 101L675 101L600 101L525 101L450 101L375 101L300 101L225 101L150 101L75 101L0 101Z"></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default SpecialsMainPage;
