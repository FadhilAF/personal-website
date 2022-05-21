import './SpecialsMainPage.css';

function SpecialsMainPage() {
    document.title = "FadhilAF - Specials Main Page";
    
    const topics = [ 
                    {title: "My Portofolio", description: "Describing myself as fast as possible and putting all of my proudest project here"},
                    {title: "Live Chat", description: "Currently not working, there should be alot of work to make this working"},
                    {title: "Annoying ad", description: "I'm making a pop up ad that will make you not able to see the web page (only on this page)"},
                    {title: "Custom Object", description: "Place where I put some custom object and should it should look cool."}
                   ];

    return (
        <div>
            <div className="title-container">
                <p className="text-2xl font-bold m-8">Specials</p>
                <div className="m-auto title-desc">
                    The topic here could only made by me, and each
                    section is saved by the source code (not the database).
                </div>
            </div>
            <div className="topics">
                {topics.map((topic, index)=>(
                    <div className={`topic-container ${(index%2==0)? 'topic-container-odd':'topic-container-even'}`} key={index}>
                       {(index%2==0)? <svg className="separator-odd" viewBox="0 0 900 100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 48L75 72L150 38L225 38L300 51L375 47L450 22L525 71L600 49L675 66L750 68L825 20L900 59L900 101L825 101L750 101L675 101L600 101L525 101L450 101L375 101L300 101L225 101L150 101L75 101L0 101Z"></path></svg> :
                       <svg className="separator-even" viewBox="0 0 900 100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 77L75 25L150 48L225 32L300 70L375 70L450 27L525 58L600 52L675 76L750 56L825 59L900 56L900 101L825 101L750 101L675 101L600 101L525 101L450 101L375 101L300 101L225 101L150 101L75 101L0 101Z"></path></svg> }
                       <div className={`topic ${(index%2==0)?'topic-odd':'topic-even'}`}>
                           <h3 className="topic-title">{topic.title}</h3>
                           <p className="topic-desc">{topic.description}</p>
                       </div>
                    </div>
                ))}
                {(topics.length%2==1) &&
                <div className="topic-container topic-container-even">
                    <svg className="separator-even" viewBox="0 0 900 100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 77L75 25L150 48L225 32L300 70L375 70L450 27L525 58L600 52L675 76L750 56L825 59L900 56L900 101L825 101L750 101L675 101L600 101L525 101L450 101L375 101L300 101L225 101L150 101L75 101L0 101Z"></path></svg>
                </div>} 
            </div>
        </div>
    );
}

export default SpecialsMainPage;