import { NavBar } from "../components/NavBars/NavBar"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Entrenador = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <h1 className="cuerpo">Entrenador</h1>
        <div className="opcionCard">
          <div className="opcionCard-individual">
            <Card sx={{ maxWidth: 345 }} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    fixture ⚽️
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    estos son los partidos del torneo
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="opcionCard-individual">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    estadísticas equipo/jugadores 📈
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    acá vas a poder ver el rendimiento grupal e individual
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="opcionCard-individual">
            <Card sx={{ maxWidth: 345 }} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    planteles 📋
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    acá podés ver el resto de la información de tu/tus equipos
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>

      </div>
    </>
  )
}
