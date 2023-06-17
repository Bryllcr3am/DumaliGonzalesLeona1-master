function getDashboardData(){

    getValueofReportandStatistics()
    getValueofResidents()
    getValueofUserRegistered()
    getValueofBarangayOfficials()

}

function resolveAfter2Seconds(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolved after 2 seconds');
        }, 2000);
    });
}
function resolveAfter3Seconds(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolved after 3 seconds');
        }, 3000);
    });
}
function resolveAfter4Seconds(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolved after 4 seconds');
        }, 4000);
    });
}
function resolveAfter5Seconds(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolved after 5 seconds');
        }, 5000);
    });
}

//Report and Statistics
async function getValueofReportandStatistics() {
    try {
      const response = await fetch('http://localhost:8080/blog');
      const html = await response.text();
  
      // Parse the HTML string
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
  
      // Find the <h3> element and extract its value
      const element = doc.getElementById('new_orders');
      const value = element.textContent;
      
      console.log('Retrieving Report and Statistics');
      const result = await resolveAfter2Seconds();
      console.log("Report and Statistics: " +value); 
      return value;
    } catch (error) {
      console.error(error);
    }
  }

  //Residents
    async function getValueofResidents() {
    try {
      const response = await fetch('http://localhost:8080/blog');
      const html = await response.text();
  
      // Parse the HTML string
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
  
      // Find the <h3> element and extract its value
      const element = doc.getElementById('bounce_rate');
      const value = element.textContent;
      
      console.log('Retrieving Residents');
      const result = await resolveAfter3Seconds();
      console.log("Residents: " + value); 
      return value;
    } catch (error) {
      console.error(error);
    }
  }
    //User Registered
    async function getValueofUserRegistered() {
        try {
          const response = await fetch('http://localhost:8080/blog');
          const html = await response.text();
      
          // Parse the HTML string
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
      
          // Find the <h3> element and extract its value
          const element = doc.getElementById('user_count');
          const value = element.textContent;
          
          console.log('Retrieving User Registered');
          const result = await resolveAfter4Seconds();
          console.log("User Registered: " + value); 
          return value;
        } catch (error) {
          console.error(error);
        }
      }
        //Barangay Officials
        async function getValueofBarangayOfficials() {
          try {
            const response = await fetch('http://localhost:8080/blog');
            const html = await response.text();
        
            // Parse the HTML string
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
        
            // Find the <h3> element and extract its value
            const element = doc.getElementById('unique_visitors');
            const value = element.textContent;
            
            console.log('Retrieving Barangay Officials');
            const result = await resolveAfter5Seconds();
            console.log("Barangay Officials: " + value); 
            return value;
          } catch (error) {
            console.error(error);
          }
        }
  
  window.onload =  getDashboardData();