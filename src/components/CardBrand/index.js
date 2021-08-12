import React, { Component } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./CardBrand.css";

export default class index extends Component {
  render() {
    return (
      <>
        <div className="TagSection">
          <Card className="TagImageCard">
            <CardContent>
              {/* card image */}
              <img src={"../images/m.png"} className="logo" alt="logo" />

              {/* card contents */}
              <Typography variant="body2" color="textSecondary" component="p">
                Indeed helps the world’s largest family restaurant business to
                recruit high quality candidates for its hard-to-fill positions.
              </Typography>
            </CardContent>
          </Card>

          <Card className="TagImageCard">
            <CardContent>
              {/* card image */}
              <img
                src={"../images/education.png"}
                className="logo"
                alt="logo"
              />

              {/* card contents */}
              <Typography variant="body2" color="textSecondary" component="p">
                Indeed helps the world’s largest family restaurant business to
                recruit high quality candidates for its hard-to-fill positions.
              </Typography>
            </CardContent>
          </Card>

          <Card className="TagImageCard">
            <CardContent>
              {/* card image */}
              <img src={"../images/nokia.png"} className="logo" alt="logo" />

              {/* card contents */}
              <Typography variant="body2" color="textSecondary" component="p">
                Indeed helps the world’s largest family restaurant business to
                recruit high quality candidates for its hard-to-fill positions.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }
}
