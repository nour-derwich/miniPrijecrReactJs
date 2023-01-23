
import json from 'react'
import React, {useState,useEffect} from 'react';
import Agents from './Agents';
function Main() {
    // Insert the JSON data
    const data = JSON.parse('{"results":[{"os":"Ubuntu","lastKeepAlive":"9999-12-31T23:59:59Z","dateAdd":"2022-07-18T07:14:54Z","ip":"127.0.0.1","name":"cyr-customer-ossec.local","id":"000","version":"Wazuh v4.3.8","status":"active"},{"os":"Microsoft Windows 11 Pro","lastKeepAlive":"2022-10-19T14:33:38Z","dateAdd":"2022-08-01T08:49:55Z","ip":"192.168.1.216","name":"DESKTOPUD0U8ND","id":"024","version":"Wazuh v4.3.6","status":"disconnected"},{"os":"Microsoft Windows 11 Pro","lastKeepAlive":"2022-10-20T10:21:02Z","dateAdd":"2022-10-11T09:31:22Z","ip":"10.127.0.4","name":"Win11Agent","id":"025","version":"Wazuh v4.3.6","status":"active"},{"os":"Microsoft Windows 11 Pro","lastKeepAlive":"2022-10-19T10:41:01Z","dateAdd":"2022-10-11T09:35:53Z","ip":"192.168.43.45","name":"customer-05-DESKTOP-UH5KTO9","id":"026","version":"Wazuh v4.3.8","status":"disconnected"},{"os":"Microsoft Windows 10 Enterprise","lastKeepAlive":"2022-10-20T09:52:41Z","dateAdd":"2022-10-20T08:14:44Z","ip":"192.168.1.65","name":"customer-05-DESKTOP9"}]}');
//  Initialize counter for total agents

const [totalAgents, setTotalAgents] = useState(0);
const [activeAgents, setActiveAgents] = useState(0);
const [disconnectedAgents, setDisconnectedAgents] = useState(0);
const [pendingAgents, setPendingAgents] = useState(0);
const [neverConnectedAgents, setNeverConnectedAgents] = useState(0);
// Function to count the agents with different statuses
const countAgents = (data) => {
  let total = 0;
    let active = 0;
    let disconnected = 0;
    let pending = 0;
    let neverConnected = 0;
  for (var i = 0; i < data.results.length; i++) {
      var agent = data.results[i];
        // check if the agent is not the one with name "cyr-customer-ossec.local" or ID "000"
    
          if (agent.name !== "cyr-customer-ossec.local" && agent.id !== "000") {
            total += 1;
            // check the status of the agent
            if (agent.status === "active") {
                active += 1;
            } else if (agent.status === "disconnected") {
                disconnected += 1;
            } else if (agent.status === "pending") {
                pending += 1;
            } else if (agent.status === "never_connected") {
                neverConnected += 1;
            }
        }
      }
      setTotalAgents(total);
      setActiveAgents(active);
      setDisconnectedAgents(disconnected);
      setPendingAgents(pending);
      setNeverConnectedAgents(neverConnected);
}
useEffect(() => {
  countAgents(data);
}, [])
       
        
 return (
    <>
       
<Agents 
 totalAgents={totalAgents}
 activeAgents={activeAgents}
 disconnectedAgents={disconnectedAgents}
 pendingAgents={pendingAgents}
 neverConnectedAgents={neverConnectedAgents}/>
    </>
  )
}

export default Main