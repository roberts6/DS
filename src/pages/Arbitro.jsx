import { NavBar } from "../components/NavBars/NavBar"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Arbitro = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <h1 className="cuerpo">Árbitro</h1>
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
                    partidos asignados ⚽️
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    estos son los partidos que toca referar
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
                    carga de planillas 💾
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    acá vas a poder cargar de forma digital las planillas de juego
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
                    acá podés descargarte en pdf el listado de jugadores de cada equipo
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
