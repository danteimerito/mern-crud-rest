const express = require('express')
const router = express.Router()
const { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal 
} = require('../controllers/goalController')

const {protect} = require('../middleware/authMiddleware')

//get goal
router.get('/', protect, getGoals)

//set goal
router.post('/', protect, setGoal)

//update goal
router.put('/:id', protect, updateGoal)

//delete goal
router.delete('/:id', protect, deleteGoal)

// // //condensed version:
// router.route('/').get(protect, getGoals).post(protect, setGoal)
// router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router