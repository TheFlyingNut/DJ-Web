import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton } from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete'; // Import DeleteIcon
//import DeleteIcon from '@mui/icons-material/Delete';

export default function CardItem({ id, image, description, url, onDelete }) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image} // Use the image prop here
          alt="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {description} {/* Use the description prop here */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {url} {/* Use the url prop here */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <IconButton aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Card>
  );
}
