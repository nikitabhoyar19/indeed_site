import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="CardContainer">
      <Card className="NumberCard">
        <CardContent>
          <h3>1</h3>
          <Typography gutterBottom variant="h5" component="h2">
            Create Your Free Account
          </Typography>

          <p>
            All you need is your email address to create an account and start
            building your job post.
          </p>
        </CardContent>
      </Card>

      <Card className="NumberCard">
        <CardContent>
          <h3>2</h3>
          <Typography gutterBottom variant="h5" component="h2">
            Create Your Free Account
          </Typography>

          <p>
            All you need is your email address to create an account and start
            building your job post.
          </p>
        </CardContent>
      </Card>

      <Card className="NumberCard">
        <CardContent>
          <h3>3</h3>
          <Typography gutterBottom variant="h5" component="h2">
            Create Your Free Account
          </Typography>

          <p>
            All you need is your email address to create an account and start
            building your job post.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
