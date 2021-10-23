import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Scard(props){
    return ( 
      <div>    
        {
            props.characters.map(c=>
                {
                    return (
                        <Card
                        style={{
                            width: "50%",
                            border: "solid 3px #d3d3d3",
                            margin: "10px auto"
                          }}
                        >
                        <CardContent>
                                <Typography
                                    style={{ fontSize: 14 }}
                                    color="textSecondary"
                                    gutterBottom
                                >
                                    {c.name}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {c.alterEgo}
                                </Typography>
                                <Typography
                                    style={{
                                    marginBottom: 12,
                                    }}
                                    color="textSecondary"
                                >
                                    {c.alignment}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {c.alterEgo}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">{c.alterEgo}</Button>
                            </CardActions>
                        </Card>
                    )
                }
            )
        };
      </div>
     );
}
