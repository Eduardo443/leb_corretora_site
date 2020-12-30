import React from 'react'

import CallCenterCard from '../CallCenterCard/index'
import { Container, Tittle, Cards } from './style'

import Liberty from '../../assets/imgs/liberty.png'
import HDI from '../../assets/imgs/hdi.png'
import Allianz from '../../assets/imgs/allianz.png'
import Sulamerica from '../../assets/imgs/sulamerica.png'
import Porto from '../../assets/imgs/porto.png'
import Azul from '../../assets/imgs/azul.png'
import Bradesco from '../../assets/imgs/bradesco.png'
import Sompo from '../../assets/imgs/sompo.png'
import Tokio from '../../assets/imgs/tokio.png'
import Zurich from '../../assets/imgs/zurich.png'

export default () => {
    return (
        <Container>
            <Tittle><h1>Atendimento Auto</h1></Tittle>
            <Cards>
                <CallCenterCard Img={Liberty} Name='Liberty/Aliro' PhoneNumber='0800 701 4120'/>
                <CallCenterCard Img={HDI} Name='HDI' PhoneNumber='0800 434 4340'/>
                <CallCenterCard Img={Allianz} Name='Allianz' PhoneNumber='0800 0130 700'/>
                <CallCenterCard Img={Sulamerica} Name='Sulamerica' PhoneNumber='0800 727 4100'/>
                <CallCenterCard Img={Porto} Name='Porto' PhoneNumber='0800 727 2755'/>
                <CallCenterCard Img={Azul} Name='Azul' PhoneNumber='0800 703 0203'/>
                <CallCenterCard Img={Bradesco} Name='Bradesco' PhoneNumber='0800 701 2757'/>
                <CallCenterCard Img={Sompo} Name='Sompo' PhoneNumber='0800 7719 119'/>
                <CallCenterCard Img={Tokio} Name='Tokio' PhoneNumber='0300 338 6546'/>
                <CallCenterCard Img={Zurich} Name='Zurich' PhoneNumber='0800 729 1400'/>
            </Cards>
        </Container>
    );
}