import React from "react";
import bookSearch from '../../assets/projects/book-search.png';
import budgetTracker from '../../assets/projects/budget-tracker.png';
import noteTaker from '../../assets/projects/note-taker.png';
import techBlog from '../../assets/projects/tech-blog.png';
import weatherApp from '../../assets/projects/weather-app.png';
import fitnessApp from '../../assets/projects/fitness-app.png';
import swapMeet from '../../assets/projects/swap-meet.png';
import weeklyCalendar from '../../assets/projects/weekly-calendar.png';
import ProjectTile from "../ProjectTile";


const Portfolio = (Project) => {
  
    const projectList = [
        {
            title: "Weekly Calendar",
            image: weeklyCalendar,
            deployedLink: "https://protected-chamber-88097.herokuapp.com/" ,
            repoLink: "https://github.com/lwrnce/project-3",
        },
        {
            title: "Swap Meet",
            image: swapMeet,
            deployedLink: "https://serene-brushlands-34437.herokuapp.com/" ,
            repoLink: "https://github.com/lwrnce/swap-meet",
        },
        {
            title: "Fitness App",
            image: fitnessApp,
            deployedLink: "https://devinpask.github.io/Fitness-App/" ,
            repoLink: "https://github.com/lwrnce/Fitness-App",
        },
        {
            title: "Book Search",
            image: bookSearch,
            deployedLink: "https://tranquil-hamlet-54026.herokuapp.com/" ,
            repoLink: "https://github.com/lwrnce/book-search-engine",
        },
        {
            title: "MVC Tech Blog",
            image: techBlog,
            deployedLink: "https://immense-refuge-41899.herokuapp.com/" ,
            repoLink: "https://github.com/lwrnce/tech-blog",
        },
        {
            title: "Budget Tracker",
            image: budgetTracker,
            deployedLink: "https://cryptic-lake-47966.herokuapp.com/" ,
            repoLink: "https://github.com/lwrnce/budget-tracker",
        },
        {
            title: "Note Taker",
            image: noteTaker,
            deployedLink: "https://sleepy-cove-23627.herokuapp.com/" ,
            repoLink: "https://github.com/lwrnce/note-taker",
        },
        {
            title: "Weather Dashboard",
            image: weatherApp,
            deployedLink: "https://lwrnce.github.io/weather-app/" ,
            repoLink: "https://github.com/lwrnce/weather-app",
        }
    ]

    return (
      <div key={Project.title}>
        <div>
            <h1>Projects</h1>
            <br></br>
            <div>
                {projectList.map((Project) => (
                    <ProjectTile Project={Project}/>
                ))}
            </div>
        </div>
      </div>
    );
  }

export default Portfolio;