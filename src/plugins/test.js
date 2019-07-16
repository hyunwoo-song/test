const longFunc = (i) => {
  return new Promise((resolve, reject) => {
    const t = Math.random() * 1000
    console.log(t)
    setTimeout(() => {
      resolve(i)
    }, t)
  })
}

const foo = () => {
  for (let i = 0; i < 10; i++) {
    //     longFunc(i)
    //       .then(r => {
    //         console.log(r)
    //       })
    //       .catch(e => {
    //         console.error(e.message)
    //       })
    //   }
    //   console.log('foo')

    //   let i = 111
    //   let j = 333
    //   let k = 555
    //   for (let i = 0; i < 10; i++) {
    //     j++
    //   }
    //   console.log(i + j + k)
  }
}

export default {
  foo
}
