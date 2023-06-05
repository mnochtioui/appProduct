import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from './Name'
import Description from './Description';
import Price from './Price'
import {prd} from '../product'

const carta = () => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prd.url} />
      <Card.Body>
      
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <Description/>
        </Card.Text>
        <Button variant="primary"><Price/></Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default carta