import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post({ title, creator, postedDate, content, image }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader action={ <IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
        title={creator}
        subheader={postedDate}/>
      
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="memory img"
      />

      <CardContent>
      <Typography variant="h6" sx={{marginBottom: "10px"}} color="text.primary">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{content}</Typography>
      </CardContent>

      <CardActions sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}} disableSpacing>
        <IconButton aria-label="like">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteForeverIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}