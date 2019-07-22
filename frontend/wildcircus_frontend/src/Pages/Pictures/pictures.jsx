import React from 'react';
import {  CardImg } from 'reactstrap';
  import {Container, Row, Col} from "reactstrap";

  import './pictures.scss'

const Example = (props) => {
  return (
    <div className="divGallerie">
      <Container className="CitizenText">

            <h1 className="h1Gallerie">Gallerie</h1>
            <CardImg className="galleriePicture1" top width="100%" src="https://secureservercdn.net/72.167.241.134/pp1.d56.myftpupload.com/wp-content/uploads/2018/03/Cirque-du-Soleil_05_Volta_01.jpg?time=1559325669" alt="Card image cap" />
           
            <Row className="picturesGallerie2">
             <Col offset={2}></Col>
              <Col sm={4}><CardImg top width="100%" src="https://www.cirquedusoleil.com/-/media/cds/images/pressroom/photos/alegria/pop-up/cirquedusoleil_71_alegria2019_m-alemire.jpg?db=web&h=640&la=fr&vs=1&w=960&hash=C21371E4BC188485690D3670203C5A7F8DD5A9B7" alt="Card image cap" /></Col>
              <Col offset={2}></Col>
              <Col sm={4}><CardImg top width="100%" src="https://images.itnewsinfo.com/lmi/articles/grande/000000059236.jpg" alt="Card image cap" /></Col>
              <Col offset={2}></Col>
            </Row>

            <Row className="picturesGallerie2">
             <Col offset={2}></Col>
              <Col sm={4}><CardImg top width="100%" src="https://www.cirquedusoleil.com/-/media/cds/images/pressroom/photos/alegria/pop-up/cirquedusoleil_71_alegria2019_m-alemire.jpg?db=web&h=640&la=fr&vs=1&w=960&hash=C21371E4BC188485690D3670203C5A7F8DD5A9B7" alt="Card image cap" /></Col>
              <Col offset={2}></Col>
              <Col sm={4}><CardImg top width="100%" src="https://images.itnewsinfo.com/lmi/articles/grande/000000059236.jpg" alt="Card image cap" /></Col>
              <Col offset={2}></Col>
            </Row>

            <Row className="picturesGallerie2">
             <Col offset={2}></Col>
              <Col sm={4}><CardImg top width="100%" src="https://www.cirquedusoleil.com/-/media/cds/images/pressroom/photos/alegria/pop-up/cirquedusoleil_71_alegria2019_m-alemire.jpg?db=web&h=640&la=fr&vs=1&w=960&hash=C21371E4BC188485690D3670203C5A7F8DD5A9B7" alt="Card image cap" /></Col>
              <Col offset={2}></Col>
              <Col sm={4}><CardImg top width="100%" src="https://images.itnewsinfo.com/lmi/articles/grande/000000059236.jpg" alt="Card image cap" /></Col>
              <Col offset={2}></Col>
            </Row>

            <Row className="picturesGallerie2">
             <Col offset={2}></Col>
              <Col sm={4}><CardImg top width="100%" src="https://www.cirquedusoleil.com/-/media/cds/images/pressroom/photos/alegria/pop-up/cirquedusoleil_71_alegria2019_m-alemire.jpg?db=web&h=640&la=fr&vs=1&w=960&hash=C21371E4BC188485690D3670203C5A7F8DD5A9B7" alt="Card image cap" /></Col>
              <Col offset={2}></Col>
              <Col sm={4}><CardImg top width="100%" src="https://images.itnewsinfo.com/lmi/articles/grande/000000059236.jpg" alt="Card image cap" /></Col>
              <Col offset={2}></Col>
            </Row>

            <Row className="picturesGallerie2">
             <Col offset={2}></Col>
              <Col sm={4}><CardImg top width="100%" src="https://www.cirquedusoleil.com/-/media/cds/images/pressroom/photos/alegria/pop-up/cirquedusoleil_71_alegria2019_m-alemire.jpg?db=web&h=640&la=fr&vs=1&w=960&hash=C21371E4BC188485690D3670203C5A7F8DD5A9B7" alt="Card image cap" /></Col>
              <Col offset={2}></Col>
              <Col sm={4}><CardImg top width="100%" src="https://images.itnewsinfo.com/lmi/articles/grande/000000059236.jpg" alt="Card image cap" /></Col>
              <Col offset={2}></Col>
            </Row>



        </Container>
      </div>
  
  );
};

export default Example;