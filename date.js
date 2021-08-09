const  getDate = () =>{
    const today = new Date();
    const options = {
        weekday :"long",
        day : "numeric",
        month:"long"
    }
    const day = today.toLocaleDateString("en-us",options);
    return day;
}

const  getDay = () =>{
    const today = new Date();
    const options = {
        weekday :"long",
    }
    const day = today.toLocaleDateString("en-us",options);
    return day;
}
module.exports = {
    getDay,
    getDate
}