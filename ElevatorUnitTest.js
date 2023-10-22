//HAPPY PATH
    // buttons light up 
    // buttons react to selected floor 
    // Door button - opens door
    // Close button - closes door
    // Door hold - extends the time of door being open 

// UNHAPPY PATH
    // buttons do not react 
    // doors do not close 
    // does not take you to the floor you selected 


//     Test Examples: 

// Unit Test Examples:
// Pushing the "door open" button should hold the door open as long as it is pushed.
// Pushing the "door open" button when the elevator is moving should do nothing.
// Pushing the "door closed" button should close the door if it is open.
// Pushing the "door closed" button if the door is open and someone is standing in the doorway should do nothing.
// Pushing an unlit floor should light up that button.
// Integration Test Example:
// Going from a higher to a lower floor temporarily disables the elevator from responding to the "up" button pressed in the lobby. 
// Functional Test Example: 
// Operate the elevator so that a guest: 
// Goes from their room to Floor 7 to breakfast in the Lobby 
// Returns to their room to change into workout clothes
// Goes to the fitness center on Floor 10
// Returns to their room
// Acceptance Test Example: 
// Install the new panel in five locations for six months and collecting feedback before installing in all 1,200 locations. 