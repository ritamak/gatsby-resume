import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function ProjectCard({
  title,
  name,
  shortDescription,
  image,
  index,
}) {
  return (
    <Grid item xs={4} sm={4} md={4} key={index}>
      <Card>
        <GatsbyImage image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {shortDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/${name}`}>Learn More</Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
