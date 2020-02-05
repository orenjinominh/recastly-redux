import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch(action.type) {
    case 'CHANGE_VIDEO':
      // return action.video;
      // debugger;
      return action.video;
    default:
      // debugger;
      return state;
  }
};

export default currentVideoReducer;

// Uncaught Error: Given action "CHANGE_VIDEO", reducer "currentVideo" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.
//     at combination (eval at <anonymous> (spec.bundle.js:6044), <anonymous>:127:15)
//     at dispatch (eval at <anonymous> (spec.bundle.js:3893), <anonymous>:169:22)
//     at eval (eval at <anonymous> (spec.bundle.js:3869), <anonymous>:14:16)
//     at dispatch (eval at <anonymous> (spec.bundle.js:6020), <anonymous>:37:18)
//     at eval (eval at <anonymous> (spec.bundle.js:1322), <anonymous>:67:7)