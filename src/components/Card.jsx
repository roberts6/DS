//import { useState } from "react"
import '../styles/cards.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export const CardContainer = ({ avatar_url, id, login, type }) => {

    //const [existe, setExiste] = useState(false)

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={avatar_url}
                        alt={login}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {login}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Número: {id}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Puesto: {type}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {/* <CardActions>
                        <Button size="small" color="primary">
                            Más información
                        </Button>
                    </CardActions> */}
            </Card>
        </>
    );
}
