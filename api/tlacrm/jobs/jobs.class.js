class Job {
    
    add(req,res) {
        console.log(req.body)
    }

}

module.exports = new Job();