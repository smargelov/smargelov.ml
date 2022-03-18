import './main-color.sass'

export default {
  // A helper exp-{name}-{var} class will be added to the root element
  name: 'main-color',

  // Google optimize experiment id
  experimentID: 'B5ips36lQ9qA0jdjZYsNpw',

  // [optional] specify number of sections for MVT experiments
  // sections: 1,

  // [optional] maxAge for a user to test this experiment
  // maxAge: 60 * 60 * 24, // 24 hours,

  // [optional] Enable/Set experiment on certain conditions
  // isEligible: ({ route }) => route.path !== '/foo'

  // Implemented variants and their weights
  variants: [
    { weight: 1 }, // <-- This is the default variant
    { weight: 1 }
  ]
}
