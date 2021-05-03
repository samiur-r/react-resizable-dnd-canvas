import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import { Container, Grid } from '@material-ui/core';
import ResizableDNDCanvas from '../components/ResizableDNDCanvas'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Home= () => {

    const [image, setImage]= useState<string>('https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')

    const handleWidthChange= () => {

    }

    const handleHeightChange= () => {
        
    }

    const handleImageUpload= (e:any) => {
        const objectUrl = URL.createObjectURL(e.target.files[0])
        setImage(objectUrl)
    }

    useEffect(() => {  
        return () => (
            URL.revokeObjectURL(image)
        )
      }, [])

    return (
    <>
        <Layout />
        <Container style={{paddingTop: 50}}>
            <Grid container justify="center" spacing={5}>
                <Grid 
                    item 
                    xs={12} md={7} 
                    style={{overflow: 'hidden', height: 600, border: '1px solid red', position: 'relative'}}
                >
                    <ResizableDNDCanvas 
                        imgSrc={image}
                        // handleHeightChange={handleHeightChange} 
                        // handleWidthChange={handleWidthChange}
                    />
                </Grid>
                <Grid item xs={12} md={5} style={{border: '1px solid red'}}>
                    Row 2
                </Grid>
            </Grid>
            <Grid container justify="center" style={{marginTop: 50}}>
                <Grid item>
                <Box style={{width: 250, height: 80, background: '#fafafa'}}>
                    <Button variant="contained" component="label" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <AddCircleOutlineIcon style={{width: 50, height: 50, cursor: 'pointer',}} color="primary"/>
                        <input
                            type="file"
                            style={{ display: "none" }}
                            onChange={handleImageUpload}
                        />
                        <Box ml={1}>Upload Image</Box>
                    </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </>
    );
}

export default Home;
