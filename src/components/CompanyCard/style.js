import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import { GlassEffect } from '../../styles';

export const Card = styled(GlassEffect)`
    /* background: #fff; */
    margin: 100px 20px 50px 20px;
    border-radius: 20px;
    min-height: 50vh;
    min-width: 95%;
`;

export const TypeIcon = styled.img`
    padding:5px 10px;
    width:100%;
`;

export const LinkText = styled(Link)`
    text-decoration: none;
`;

export const CardGrid = styled(Grid)`
    width:100%;
    padding: 30px 15px;
`;

export const NumberGrid = styled(Grid)`
    margin: 10px 15px;
`;

export const Title = styled.h3`
  padding-top:20px;
  font-size:28px;
  color: #fff;
  text-decoration: none;
  @media only screen and (max-width: 768px) {
    padding-top:10px;
    font-size:18px;
  }
`;

export const Subtitle = styled.p`
  padding-top:3px;
  font-size: 16px;
  color: #8D8787;
  @media only screen and (max-width: 768px) {
    font-size:14px;
  }
`;

export const NoData = styled.h3`
  padding:20px 30px;
  font-size:32px;
  color: #fff;
  text-decoration: none;
  @media only screen and (max-width: 768px) {
    padding-top:10px;
    font-size:18px;
  }
`;

export const CompanyTitle = styled.h3`
  padding-top:40px;
  font-size:40px;
  color: #fff;
  text-decoration: none;
  @media only screen and (max-width: 768px) {
    padding-top:5px;
    font-size:32px;
    text-align: center;
  }
`;

export const CompanySubtitle = styled.p`
  padding-top:10px;
  font-size: 16px;
  color: #8D8787;
  @media only screen and (max-width: 768px) {
    font-size:14px;
    text-align: center;
    padding-top:5px;
  }
`;

export const Avatar = styled.img`
    width:130px;
    margin: 5% 10%;
    @media only screen and (max-width: 768px) {
        width: 100%;
        margin: 0;
        padding:10px 30%;
  }
`;