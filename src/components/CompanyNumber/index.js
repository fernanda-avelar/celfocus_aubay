import React, { useState, useEffect, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import LandlineIcon from '../../assets/landline.png'
import { avatarPathResolve } from '../../utils/ChooseAvatar';
import MobileIcon from '../../assets/mobile.png'
import { Card, CardGrid, Avatar, CompanyTitle, CompanySubtitle, Title, Subtitle, NumberGrid, TypeIcon, TypeIconGrid } from './style';
import { useHistory } from 'react-router-dom';
import { ButtonNeon } from '../../styles'


const CompanyNumber = ({match, location}) => {
    const { numberId } = match.params
    const { company } = location.state
    const history = useHistory();
    const [companyNumberInfo, setCompanyNumberInfo] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/phone_numbers/${numberId}`)
            .then(response => response.json())
            .then(data => setCompanyNumberInfo(data))
    }, [numberId])

    

    const goBack = useCallback(() => {
        history.goBack();
    }, [history]);

    return (
        <>
            <Card>
                <CardGrid container>
                    <TypeIconGrid item xs={12} sm={4}>
                        <Avatar src={avatarPathResolve(companyNumberInfo.company_id)} />
                    </TypeIconGrid>
                    <Grid item xs={12} sm={8}>
                        <CompanyTitle>{company.name}</CompanyTitle>
                        <CompanySubtitle>{company.vatin}</CompanySubtitle>
                    </Grid>
                </CardGrid>
                <NumberGrid container>
                    <TypeIconGrid item xs={4} sm={4}>
                        {companyNumberInfo.type === "mobile" ? <TypeIcon src={MobileIcon} /> : <TypeIcon src={LandlineIcon} />}
                    </TypeIconGrid>
                    <Grid item xs={7} sm={7}>
                        <Title>
                            {companyNumberInfo.id}
                        </Title>
                        <Subtitle>
                            {companyNumberInfo.type}
                        </Subtitle>
                    </Grid>
                </NumberGrid>
            </Card>
            <Grid container>
                <ButtonNeon onClick={goBack} >Voltar</ButtonNeon>
            </Grid>
        </>
    );
}

export default CompanyNumber;