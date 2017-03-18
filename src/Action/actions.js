const action_types = require('./action_types');


// let actions = {
//   switchLanguage(language) {
//     return {
//       type: action_types.SWITCH_LANGUAGE,
//       language
//     }
//   }
// };

export function switchLanguage(language) {
  return {
    type: action_types.SWITCH_LANGUAGE,
    language
  }
}

// module.exports = actions;
