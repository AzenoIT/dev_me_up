import {NavLink} from "react-router-dom";

import '../../styles/main.scss'
import {Button, Stack} from "@mui/material";
import React from "react";

function Main() {
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
                        <Button className='nav-button' variant='contained'>Załóż konto</Button>
                        <Button className='nav-button' variant='contained'>Zaloguj</Button>
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
            <div className='box-shadow'>
               <div className='cards'>
                   <div className='card'>
                       <h2>Easy</h2>
                       <p>opis kategorii</p>
                   </div>
                   <div className='card'>
                       <h2>Medium</h2>
                       <p>opis kategorii</p>
                   </div>
                   <div className='card'>
                       <h2>Hard</h2>
                       <p>opis kategorii</p>
                   </div>
               </div>
            </div>
            <div className='box-shadow'>
                <div className='cards'>
                    <div className='card'>
                    <h2>
                        Tutorial
                    </h2>
                    </div>
                    <div className='card'>
                        <h2>
                            Graj versus
                        </h2>
                    </div>
                    <div className='card'>
                        <h2>
                            Graj
                        </h2>
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

export default Main;