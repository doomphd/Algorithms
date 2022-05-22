var foo = new Promise((resolve, reject) => {
    reject(Error('Send Help'))
})
foo.catch(error=> console.log(error.message))
foo.catch(error=> console.log(error.message))