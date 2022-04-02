const express = require('express')
const router = express.Router()
const { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal 
} = require('../controllers/goalController')

//get goal
router.get('/', getGoals)

//set goal
router.post('/', setGoal)

//update goal
router.put('/:id', updateGoal)

//delete goal
router.delete('/:id', deleteGoal)

// //condensed version:
// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router