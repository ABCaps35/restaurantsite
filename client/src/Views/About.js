import React from 'react';
import { Grid, Typography, Card, Box } from '@mui/material';

const img_url = "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg";
const img_url2 = "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium";
const img_url3 = "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg";

const description1 = "Steve's is a delightful Italian restaurant that offers a warm and inviting atmosphere for diners. The restaurant's interior is decorated with classic Italian artwork and rustic furnishings that create a cozy and intimate ambiance. The menu at Steve's features an array of delicious Italian dishes that are made using only the freshest and finest ingredients. From homemade pastas to wood-fired pizzas, every dish is prepared with care and attention to detail. Whether you're in the mood for a traditional plate of spaghetti bolognese or a hearty meatball sub, Steve's has something for everyone. The restaurant's attentive and friendly staff provide excellent service, making for a truly memorable dining experience.";
const description2 = "Steve's has been a beloved fixture in the town of Springfield, USA for over 30 years. The restaurant was founded by Steve, a first-generation Italian immigrant who had a passion for sharing his family's culinary traditions with the community. With hard work and dedication, Steve built a reputation for serving some of the best Italian food in the area. Over the years, the restaurant has become a local institution, attracting both loyal regulars and visitors who come from far and wide to sample its delicious cuisine.";
const description3 = "Despite its popularity, Steve's has always remained true to its roots, continuing to use the same recipes and techniques that Steve brought with him from his hometown in Italy. The restaurant also sources many of its ingredients locally, supporting nearby farmers and businesses. Today, Steve's is run by Steve's son, who has inherited his father's passion for food and hospitality. The restaurant remains a beloved gathering place for families, friends, and food lovers alike, and continues to uphold Steve's legacy of serving delicious Italian cuisine with a warm and welcoming spirit.";

const About = (props) => { 
    return(
        <Grid container justifyContent='space-evenly' width='100%' sx={{mx: 'auto', mt: 4}}>
            <Grid item xs={10} md={5} sx={{borderRadius: 12}}>
                <Card>
                    <Grid container justifyContent='center' sx={{p:1}}>
                        <Grid item>
                            <Box sx={{borderRadius: 2}} width="100%" component="img" src={img_url} alt={"Insert Image Here"}></Box>
                        </Grid>
                    </Grid>
                </Card>
                <Card sx={{mt: 3}}>
                    <Grid container item sx={{p: 2}}>
                        <Typography variant="p">{description2}</Typography>
                    </Grid>
                </Card>
                <Card sx={{mt: 3}}>
                    <Grid container justifyContent='center' sx={{p:1}}>
                        <Grid item>
                            <Box sx={{borderRadius: 2}} width="100%" component="img" src={img_url2} alt={"Insert Image Here"}></Box>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={10} md={5}>
                <Card>
                    <Grid container justifyContent='center' sx={{p: 2}}>
                        <Grid container item justifyContent='center' sx={{mb:2}}>
                            <Typography align='center' variant="h3">About Us</Typography>
                        </Grid>
                        <Grid container item sx={{mb: 1}}>
                            <Typography variant="p">{description1}</Typography>
                        </Grid>
                    </Grid>
                </Card>
                <Card sx={{mt: 3}}>
                    <Grid container justifyContent='center' sx={{p:1}}>
                        <Grid item>
                            <Box sx={{borderRadius: 2}} width="100%" component="img" src={img_url3} alt={"Insert Image Here"}></Box>
                        </Grid>
                    </Grid>
                </Card>
                <Card sx={{mt: 3}}>
                    <Grid container item sx={{p: 2}}>
                        <Typography variant="p">{description3}</Typography>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}

export default About;