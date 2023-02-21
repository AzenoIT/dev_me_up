import '../../styles/main.scss'
import {Button, Stack} from "@mui/material";
import React from "react";

function Category() {
    return (

        <div className='box'>
            <div className='box-shadow'>
                <div className='header'>
                    <h1>
                        Dev me up
                    </h1>
                    <nav>
                        <Button className='nav-button' variant='contained'>Pobierz aplikację</Button>
                        <Button className='nav-button' variant='contained'>Newsletter</Button>
                    </nav>
                </div>
            </div>
            <div className='box-shadow'>

                <div className='categories'>
                    <div className='card'>
                        <h2>Kategoria</h2>
                        <p>opis kategorii</p>
                    </div>
                    <div className='card'>
                        <h2>Kategoria</h2>
                        <p>opis kategorii</p>
                    </div>
                    <div className='card'>
                        <h2>Kategoria</h2>
                        <p>opis kategorii</p>
                    </div>
                    <div className='card'>
                        <h2>Kategoria</h2>
                        <p>opis kategorii</p>
                    </div>
                    <div className='card'>
                        <h2>Kategoria</h2>
                        <p>opis kategorii</p>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <nav>
                    <a href="">Kontakt</a>
                    <a href="">Info</a>
                    <a href="">Inne</a>
                </nav>
            </div>
        </div>
    );
}

export default Category;