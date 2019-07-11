var fetchData = function (value) {

  return new Promise(function (resolve) {

    setTimeout(function () {

      resolve(value)

    }, 3000)

  })

}

var fetchData1 = function (value) {

  return new Promise(function (resolve) {

    setTimeout(function () {

      resolve(value + 100)

    }, 500)

  })

}

async function fetch() { // 声明这里有异步回调

  const value1 = await fetchData(500) // 将异步的转换为同步回调

  console.log(value1)

  const value2 = await fetchData1(value1)

  console.log(value2)

}



export default fetch;