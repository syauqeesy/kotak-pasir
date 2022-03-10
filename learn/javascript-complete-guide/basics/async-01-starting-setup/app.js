const button = document.querySelector('button');
const output = document.querySelector('p');

function getPosition (opts) {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success)
    }, error => {
      reject(error)
    }, opts)
  })

  return promise
}

async function setTimer (duration) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!')
    }, duration)
  })

  return promise
}

async function trackUserHandler() {
  // let positionData
  let posData
  let timerData
  try {
    posData = await getPosition()
    timerData = await setTimer(2000)
  } catch (error) {
    console.log(error)
  }
  console.log(posData, timerData)
    // .then(posData => {
    //   positionData = posData
    // return setTimer(2)
    // })
    // .catch(error => {
    //   console.log(error)
    //   return 'on we go..'
    // })
    // .then(data => {
    //   console.log(data, positionData)
    // })

    // setTimer(0).then(() => {
    //   console.log('Timer done')
    // })
    // console.log('Getting position...')
}

button.addEventListener('click', trackUserHandler);

// let result = 0

// for (let i = 0; i < 10000000; i++) {
//   result += i
// }

// console.log(result)
