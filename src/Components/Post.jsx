import React from "react";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";


const Post = () => {
    return (
        <Card sx={{ margin: 5 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Johnny Test"
                subheader="May 30, 2024"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://www.dailynews.com/wp-content/uploads/2024/05/imageedit_1_66884624-16x9-1.jpg?w=620"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Dallas Mavericks celebrating Luka Doncic
                    winning Western Conference Finals MVP.(2024)
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Post