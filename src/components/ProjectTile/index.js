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

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
  export default function ProjectTile({Project}) {
    const classes = useStyles();
  
    const projectList = [
        {
            title: "Hello world",
            image: profileImage,
            deployedLink: "https://www.google.com" ,
            repoLink: "https://www.google.com",
        }
    ]

    return (
      projectList.map((Project) => (
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
            <a href={Project.github}>GitHub Repo</a>
          </Button>
        </CardActions>
      </Card>
      ))
    );
  }