function callApi(endpoint, token) {
    
    const headers = new Headers();
    const bearer = `Bearer ${token}`;
  
    headers.append("Authorization", bearer);
  
    const options = {
        method: "GET",
        headers: headers
      };
  
    logMessage('Calling US Social Security Administration.');
    logMessage('Checking your eligibility to vaccination group...');
    
    fetch(endpoint, options)
      .then(response => response.json())
      .then(response => {

        if (response) {
          logMessage(`Vaccionation Appointment ${response.grantStatus} to ${response.name}`);
        }
        
        return response;
      }).catch(error => {
        console.error(error);
      });
  }