import '../../styles/main.scss'
import {Box, Container, Grid, Icon, Paper, styled} from "@mui/material";
import React from "react";
import CategoryNavbar from "./CategoryNavbar";
import {Image} from "@mui/icons-material";
import images from './photos'
import IconButton from "@mui/material/IconButton";

const GridContainer = styled(Container)({
    marginTop: '20px',
    marginBottom: '10px'
})

const Item = styled(Paper)({
    backgroundColor: '#FFFBFE',
    borderRadius: '16px',
    aspectRatio: '1/1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

function Category() {
    return (
        <>
            <GridContainer sm={{
                flexGrow: 1
            }}>
                <Grid container spacing={2}>
                    {images.map((item) => (
                        <Grid item xs={6} sm={4} md={3} key={item}>
                                <Item>
                                    <img src={item} alt="" style={{width: '90%', height: '90%',}}/>
                                </Item>
                        </Grid>
                    ))}
                </Grid>
            </GridContainer>
            <Box>

            </Box>
        </>

    );
}

export default Category;