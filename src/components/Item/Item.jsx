import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'

function Item({ item }) {
  return (
    <Card style={{ width: '18rem' }} className='item'>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <div>
          <span style={{marginRight: '5px'}}>{item.category}</span> <span style={{color: `${item.color==='white'?'black': item.color}`}}>{item.color}</span> <span style={{marginLeft: '5px', fontStyle: 'italic'}}>{item.company}</span>
        </div>
        <Button variant="primary">${item.newPrice}</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;