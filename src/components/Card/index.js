import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { GlassEffect } from '../../styles';


const CardBox = styled(GlassEffect)`
  margin: 10px 10px;
  width: 100%;
  max-width: 500px;
  max-height: 150px;
  height:100%;
  /* background: #fff; */
  border-radius: 20px;

  @media only screen and (max-width: 768px) {
    max-height: -webkit-fill-available;
    margin: 10px 0;
  }
`;

const Avatar = styled.img`
  @media only screen and (max-width: 768px) {
    width:100%;
    padding: 10% 5px;
  }
`;

const Inner = styled(Grid)`
  padding: 4% 5%;
`;

const Title = styled.h3`
  padding-top:10px;
  font-size:28px;
  color: #fff;
  text-decoration: none;
  @media only screen and (max-width: 768px) {
    padding-top: 15px;
    padding-left:10px;
    font-size:16px;
    text-align: left;
  }
`;

const Subtitle = styled.p`
  padding-top:10px;
  font-size: 16px;
  color: #8D8787;
  @media only screen and (max-width: 768px) {
    padding-left:10px;
    padding-top:3px;
    font-size:12px;
    text-align: left;
  }
`;

const Card = (props) => {
  return (
    <CardBox>
      <Inner container>
        <Grid item sm={4} xs={3}>
          <Avatar src={props.avatar}/>
        </Grid>
        <Grid item sm={8} xs={9}>
          <Title>{props.title}</Title>
          <Subtitle>{props.subtitle}</Subtitle>
        </Grid>
      </Inner>
    </CardBox>


  );
}

export default Card;