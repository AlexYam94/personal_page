import React, { useEffect, Component } from 'react';
import Grid from '@material-ui/core/Grid';

const UnityGameSegment = (props) => {
    return (
          <Grid container direction="column" spacing={1} alignItems="center">
            <Grid container item direction="column" alignItems="center">
              <Grid item>
                <img src={props.img} width="200" height="200" />
              </Grid>
              <Grid item>
                <a href={props.url} target="_blank">
                  Play
                </a>
              </Grid>
            </Grid>
            <Grid container direction="column" alignItems="center" item>
              <p>{props.desc}</p>
            </Grid>
          </Grid>)

}

export default UnityGameSegment;