import React, { useCallback, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import LandlineIcon from '../../assets/landline.png'
import MobileIcon from '../../assets/mobile.png'
import { avatarPathResolve } from '../../utils/ChooseAvatar';
import { Card, CardGrid, Avatar, CompanyTitle, CompanySubtitle, Title, Subtitle, LinkText, NumberGrid, TypeIcon, NoData } from './style';
import { ButtonNeon } from '../../styles'
import { useHistory } from 'react-router-dom';

const CompanyCard = ({ match }) => {
    const { companyId } = match.params
    const history = useHistory();
    const [companyNumbers, setCompanyNumbers] = useState([]);
    const [companyInfo, setCompanyInfo] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/phone_numbers?company_id=${companyId}`)
            .then(response => response.json())
            .then(data => setCompanyNumbers(data))

        fetch(`http://localhost:3000/companies/${companyId}`)
            .then(response => response.json())
            .then(data => setCompanyInfo(data))

    }, [])

    const goBack = useCallback(() => {
        history.goBack();
    }, [history]);


    return (
        <>
            <Card>
                <CardGrid container>
                    <Grid item xs={12} sm={2}>
                        <Avatar src={avatarPathResolve(companyId)} />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <CompanyTitle>{companyInfo.name}</CompanyTitle>
                        <CompanySubtitle>{companyInfo.vatin}</CompanySubtitle>
                    </Grid>
                </CardGrid>
                <Grid container>
                    {companyNumbers.length > 1 ?
                    companyNumbers.map(number => (
                        <Grid item xs={12} sm={4} key={number.id}>
                            <LinkText to={{pathname: `/numbers/${number.id}`, state:{company: companyInfo}}}>
                                <NumberGrid container>
                                    <Grid item xs={3}>
                                        {number.type === "mobile" ? <TypeIcon src={MobileIcon} /> : <TypeIcon src={LandlineIcon} />}
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Title>
                                            {number.id}
                                        </Title>
                                        <Subtitle>
                                            {number.type}
                                        </Subtitle>
                                    </Grid>
                                </NumberGrid>
                            </LinkText>
                        </Grid>
                    )) : <NoData>Não há telefones</NoData>}
                </Grid>
            </Card>
            <Grid container>
                <ButtonNeon onClick={goBack} >Voltar</ButtonNeon>
            </Grid>
        </>
    );
}

export default CompanyCard;