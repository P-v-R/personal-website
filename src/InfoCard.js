import React from 'react';
import "./InfoCard.css"


import { Card, CardTitle, CardText } from 'reactstrap';


function InfoCard({ title }) {



  return (
    <div className="InfoCardDiv">
      <Card body className="InfoCard text-center border border-dark">
        <CardTitle tag="h2">{title}</CardTitle>
        <CardText className="InfoCard-Text">
          sample text about the things i like to do and what makes me great sample text about the things i like to do and what makes me great
          sample text about the things i like to do and what makes me great sample text about the things i like to do and what makes me great
          </CardText>
      </Card>
    </div>
  );
};

export default InfoCard;