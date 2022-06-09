const options = {weekday:"long", day:"numeric", month:"long"}


const getDate= function(){

  const options = {weekday:"long", day:"numeric", month:"long"}
  return new Date().toLocaleDateString("en-US", options)
}


const getDay= function(){

  const options = {weekday:"long"}
  return new Date().toLocaleDateString("en-US", options)
}


module.exports={getDate, getDay}
