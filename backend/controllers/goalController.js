
const asyncHandler = require("express-async-handler")


// Get goals
// route GET /api/goals

const { error } = require("console")

//access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Get Goals"
    })
})

// Set goals
// route POST /api/goals
//access Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }
    res.status(200).json({
        message: "You have set a goal"
    })
})

// Update goal
// route PUT /api/goals
//access Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Update Goal ${req.params.id}`
    })
})



// Delete goal
// route DELETE /api/goals
//access Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Delete Goal ${req.params.id}`
    })
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}