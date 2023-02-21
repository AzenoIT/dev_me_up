import '../../styles/main.scss'
import {Container, Grid, Paper, styled} from "@mui/material";
import React from "react";
import Navbar from "../Category/Navbar";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(8),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '16px',
}));



const GridContainer = styled(Container)({
    marginTop: '10px',
    marginBottom: '10px'
})


function Category() {
    return (
        <>
            <Navbar/>
            <GridContainer>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(24)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item>Nazwa</Item>
                        </Grid>
                    ))}
                </Grid>
            </GridContainer>
        </>

    );
}

export default Category;