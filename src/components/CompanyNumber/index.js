import React, { useState, useEffect, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import LandlineIcon from '../../assets/landline.png'
import { avatarPathResolve } from '../../utils/ChooseAvatar';
import MobileIcon from '../../assets/mobile.png'
import { Card, CardGrid, Avatar, CompanyTitle, CompanySubtitle, Title, Subtitle, NumberGrid, TypeIcon } from './style';
import { useHistory } from 'react-router-dom';
import { ButtonNeon } from '../../styles'


const CompanyNumber = ({ match }) => {
    const { numberId } = match.params
    const history = useHistory();
    const [companyNumberInfo, setCompanyNumberInfo] = useState({});
    const [companyInfo, setCompanyInfo] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/phone_numbers/${numberId}`)
            .then(response => response.json())
            .then(data => setCompanyNumberInfo(data))

        fetch(`http://localhost:3000/companies/${companyNumberInfo.company_id}`)
            .then(response => response.json())
            .then(data => setCompanyInfo(data))

    }, [numberId, companyNumberInfo])

    const goBack = useCallback(() => {
        history.goBack();
    }, [history]);

    return (
        <>
            <Card>
                <CardGrid container>
                    <Grid item xs={12} sm={4}>
                        <Avatar src={avatarPathResolve(companyNumberInfo.company_id)} />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <CompanyTitle>{companyInfo.name}</CompanyTitle>
                        <CompanySubtitle>{companyInfo.vatin}</CompanySubtitle>
                    </Grid>
                </CardGrid>
                <NumberGrid container>
                    <Grid item xs={3}>
                        {companyNumberInfo.type === "mobile" ? <TypeIcon src={MobileIcon} /> : <TypeIcon src={LandlineIcon} />}
                    </Grid>
                    <Grid item xs={9}>
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