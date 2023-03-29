// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
export const easing = Object.freeze({
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  })
  
  // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
  export const duration = Object.freeze({
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  })
  
  export const transition = (
    props: string | string[] = 'all',
    during: number = duration.standard,
    timing: string = easing.easeInOut,
    delay = 0
  ) => {
    return `${(Array.isArray(props) ? props : [props])
      .map(animatedProp => `${animatedProp} ${`${during}ms`} ${timing} ${`${delay}ms`}`)
      .join(',')}`
  }
  transition.duration = duration
  transition.easing = easing
  