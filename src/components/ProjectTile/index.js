import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const ProjectTile = ({Project}) => {
    const useStyles = makeStyles({
      root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
    });

    const classes = useStyles();
    return (
        <Card className={classes.root} key={Project.title}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Project.image}
              title="Contemplative Reptile"
            />
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
    );
}

export default ProjectTile;