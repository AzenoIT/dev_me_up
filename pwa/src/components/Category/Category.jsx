import '../../styles/main.scss'
import {Button, Container, Grid, Icon, Paper, styled} from "@mui/material";
import React, {useState} from "react";
import images from './photos'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import {useLocalStorage} from "../../hooks/useLocalStorage";

export const GridContainer = styled(Container)({
    marginTop: '20px',
    marginBottom: '10px'
})

const Item = styled(Paper)({
    backgroundColor: '#FFFBFE',
    borderRadius: '16px',
    aspectRatio: '1/1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outlineColor: 'red',
    cursor: 'pointer',

    '&:hover': {
        backgroundColor: '#d0d0d0',
    }
})


const ButtonCta = styled(Button)({
    textAlign: 'center',
    borderRadius: '16px',
    color: '#6750A4',
    outlineColor: '#6750A4',
    textTransform: 'none',
    width: '330px',
    height: '40px',
    backgroundImage: "linear-gradient(0deg, rgba(103, 80, 164, 0.05), rgba(103, 80, 164, 0.05))",
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
    '&:hover': {
        backgroundColor: '#6750A4',
        color: '#FFFBFE'
    }
})

const TextSmall = styled(Typography)({
    fontSize: '12px',
    textAlign: "center",
    marginTop: '4px',
})

const ButtonWrapper = styled(Box)({
    margin: "30px"
})

// {
//     "id": 1,
//     "name": "python",
//     "level": "guru"
// },
// {
//     "id": 2,
//     "name": "html",
//     "level": "junior"
// }

function Category() {
    const [profileState, setProfileState] = useState(useLocalStorage('profile') || '')[0];
    const [profileLocal, setProfileLocal] = useLocalStorage('profile')
    const [chosen, setChosen] = useState(profileState.technologies.map((el) => el.id));
    const navigate = useNavigate();

    const handleItemChoose = (item, idx) => {
        if (chosen.includes(idx)) {
            const newProfile = {
                ...profileLocal,
                technologies: [
                    ...profileLocal.technologies.filter((el) => el.id !== idx),
                ]
            }
            setProfileLocal(newProfile);
            setProfileState(newProfile);

            return setChosen(chosen.filter((el) => el !== idx));
        }

        const newProfile = {
            ...profileLocal,
            technologies: [
                ...profileLocal.technologies,
                {
                    //antipractice, placeholder untill backend connected
                    id: idx,
                    name: `${item}`.split('/')[3].split('-')[0],
                    level: 'guru'
                }
            ]
        }
        setProfileLocal(newProfile);
        setProfileState(newProfile);

        return setChosen([...chosen, idx]);
    }

    const handleNavigate = (url) => {
        navigate(url)
    }


    return (
        <>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '90vh',
                    maxWidth: '600px',
                    paddingTop: '50px',
                    alignItems: 'center'
                }}>
                <Grid container rowSpacing={{xs: 2, sm: 2, md: 3}} columnSpacing={{xs: 2, sm: 2, md: 3}}>
                    {images.map((item, idx) => (
                        <Grid item xs={6} sm={4} md={3} key={`${item}${idx}`}>
                            <Item onClick={() => handleItemChoose(item, idx)}
                                  style={{backgroundColor: chosen.includes(idx) ? '#c3ffbb' : ''}}>
                                <img src={item} alt="" style={{width: '90%', height: '90%',}}/>
                            </Item>
                        </Grid>
                    ))}
                </Grid>

                {chosen.length ?
                    (
                        <ButtonWrapper>
                            <ButtonCta onClick={() => handleNavigate('/profile')}>Przejdź dalej</ButtonCta>
                            <TextSmall>Jeśli wybrałeś już kategorie, których chcesz się uczyć</TextSmall>
                        </ButtonWrapper>
                    ) :
                    ''}
            </Container>
        </>
    );
}

export default Category;