
import Card from 'react-bootstrap/Card';
import '../static/agents.css';
import React from 'react';
const Agents=({ totalAgents, activeAgents, disconnectedAgents, neverConnectedAgents, pendingAgents })=> {
 
  return (
    <>
    <div className='col-1'>
      <p>Hello admin
        <br/>
        View the status of your agents and the evolution of their latest alarts
      </p>
      <h4 className='text'>Installed agents by thier status</h4>
    </div>
    <div  className="d-flex container">

 <Card  className="card">
       
        <Card.Body>
          <Card.Title className="tilte">Total agents</Card.Title>
          <Card.Text className="Total-card text-align">
          {totalAgents}
          </Card.Text>
        </Card.Body>
      </Card>
    

      <Card  className="card">
       
        <Card.Body>
          <Card.Title className="tilte">Active agents</Card.Title>
          <Card.Text className="active-card text-align">
          {activeAgents}
          </Card.Text>
        </Card.Body>
      </Card>
   

      <Card  className="card">
       
        <Card.Body>
          <Card.Title className="tilte">Disconnected agents</Card.Title>
          <Card.Text className="disconnected-card text-align">
          {disconnectedAgents}
          </Card.Text>
        </Card.Body>
      </Card>
  

      <Card className="card">
        
        <Card.Body>
          <Card.Title className="tilte">Pending agents</Card.Title>
          <Card.Text className="pending-card text-align">
          {pendingAgents}
          </Card.Text>
        </Card.Body>
      </Card>


      <Card className="card">
     
        <Card.Body>
          <Card.Title className="tilte">Never connected agents</Card.Title>
          <Card.Text className="never-connected-card text-align">
          {neverConnectedAgents}
          </Card.Text>
        </Card.Body>
      </Card>

    </div></>
  )
}

export default Agents