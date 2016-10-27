let thing = ['a', 'b', 'c'].map(()=> {
  new Promise((resolve, reject) => {
    google.get('')
  })
})

Promise.all(thing).then((data) => {
  
})

app.get('/labr/api/getProviders', (req,res) => {
  Provider.find({available: false})
  .then(providers => {
    let promiseArray = [Promise.resolve(providers)]
    let userIds = providers.map(v => v.userId)
    let users = userIds.forEach(id => {
        promiseArray.push(User.findOne({_id: id}))
      })
      console.log('USERS', promiseArray)
      return Promise.all(promiseArray)
  })
  .then(([...rest]) => {
    console.log('RESULTS', results)
  })
  .catch(console.error)
  res.json({ status: 200})
})

// Maybe needed for deployment

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

import React from "react";
import NewRegistration from "./NewRegistration";
import InvalidRegistration from "./InvalidRegistration";

const Register = React.createClass({

 getInitialState() {
   return({
     isRegistered: false, 
     correctComponent: <Spinner />
   })
 },

 componentWillMount() {
   axios.get('http://localhost:3000/api/' + this.props.params.beaconId)
     .then(({data: {msg}}) => {
       if (msg === "Invalid") {
         this.setState({correctComponent: <InvalidRegistration />})
       } else {
         this.setState({correctComponent: <NewRegistration beacon={this.props.params.beaconId} />});
       }
     })
     .catch(console.log);
 },

 render: function() {
   return (
     <div>
       {this.state.correctComponent}
     </div>
   );
 }
});

module.exports = Register;