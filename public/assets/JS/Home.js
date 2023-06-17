//new orders
async function getNewOrders(){
    //Get data from backend using get API
    const response = await fetch('http://localhost:8080/getvalues');
    
    //Convert the data to JSON Object
    const jsonData = await response.json();

    //Set the data in the html element
    document.getElementById("new_orders").innerHTML = jsonData.new_orders;
        
    
}

// bouce rate
async function getBounceRate(){
    //Get data from backend using get API
    const response = await fetch('http://localhost:8080/getvalues');
    
    //Convert the data to JSON Object
    const jsonData = await response.json();

    //Set the data in the html element
    document.getElementById("bounce_rate").innerHTML = jsonData.bounce_rate;
        
    
}

//User Count
async function getUserCount(){
    //Get data from backend using get API
    const response = await fetch('http://localhost:8080/getvalues');
    
    //Convert the data to JSON Object
    const jsonData = await response.json();

    
    //Set the data in the html element
        document.getElementById("user_count").innerHTML = jsonData.user_count;
    
}

//unique visitor
async function getUniqueVisitors(){
    //Get data from backend using get API
        const response = await fetch('http://localhost:8080/getvalues');
    
    //Convert the data to JSON Object
         const jsonData = await response.json();

    
    //Set the data in the html element
         document.getElementById("unique_visitors").innerHTML = jsonData.unique_visitors;
    
}




/**
 * get data from the dashboard
 */

function getDashboardData(){

    //geting new orders
    getNewOrders()
    //getting bounce rate
    getBounceRate()

    //getting user count
    getUserCount()

    //getting unique visitors
    getUniqueVisitors()
}



window.onload = getDashboardData;