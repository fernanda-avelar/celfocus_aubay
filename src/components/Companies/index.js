import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../Card';
import { avatarPathResolve } from '../../utils/ChooseAvatar';
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom';

const TitlePage = styled.h3`
  font-size:40px;
  color:#fff;
  padding-left:20px;
  @media only screen and (max-width: 768px) {
    font-size:22px;
  }
`;

const GridCards = styled(Grid)`
  padding:150px 50px 50px 50px;

  @media only screen and (max-width: 768px) {
    padding:100px 0 20px 0;
  }

`;

const LinkText = styled(Link)`
    text-decoration: none;
`;

function Companies() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/companies/')
            .then(response => response.json())
            .then(data => setCompanies(data))
    }, [])

    return (
        <GridCards container>
            <Grid item xs={12}>
                <TitlePage>Contatos</TitlePage>
            </Grid>
            {
                companies.map(company => (
                    <Grid item sm={6} xs={12} key={company.id}>
                        <LinkText to={`companies/${company.id}`}>
                            <Card title={company.name} subtitle={company.vatin} avatar={avatarPathResolve(company.id)} />
                        </LinkText>
                    </Grid>
                ))
            }
        </GridCards>
    )
}

export default Companies;