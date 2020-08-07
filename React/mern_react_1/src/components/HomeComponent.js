import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RenderCard({item}){            //can also use props here
    return(
        <Card>
            <CardImg src={item.image} alt= {item.name} />

            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>Designation: {item.designation}</CardSubtitle> : null}     {/* if item desgnation is not null, render itRecall that item designation exists only for the leader. For the other ones, I don't have it, so I'll just put null there. */}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}
function Home(props){
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;