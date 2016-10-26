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