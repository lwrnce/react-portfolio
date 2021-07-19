import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import profileImage from '../../assets/profile/profile.jpg';
import bookSearch from '../../assets/projects/book-search.png';
import budgetTracker from '../../assets/projects/budget-tracker.png';
import noteTaker from '../../assets/projects/note-taker.png';
import techBlog from '../../assets/projects/tech-blog.png';
import weatherApp from '../../assets/projects/weather-app.png';
import fitnessApp from '../../assets/projects/fitness-app.png';
import swapMeet from '../../assets/projects/swap-meet.png';
import weeklyCalendar from '../../assets/projects/weekly-calendar.png';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
  export default function ProjectTile(Project) {
    const classes = useStyles();
  
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
      projectList.map(({Project}) => (
      <Card className={classes.root} key={Project.title}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Project.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a href={Project.deployedLink}>Deployed Link</a>
          </Button>
          <Button size="small" color="primary">
            <a href={Project.repoLink}>GitHub Repo</a>
          </Button>
        </CardActions>
      </Card>
      ))
    );
  }