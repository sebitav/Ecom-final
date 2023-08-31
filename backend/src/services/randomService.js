import {fork} from 'child_process'

let calculo = fork('./utils/random.js')

const randomNums = (req, res)=> {
  const {cantidad = 1000000} = req.query

  calculo.on('message', resultado => {
     res.send(`
        <h1>process ${process.pid} proxy nginx | ${process.argv[2] || ''}</h1>
        <pre>${JSON.stringify(resultado, null, 2)}</pre>
     `)
     calculo.kill()
     calculo = fork('./utils/random.js')
  })

  calculo.send(cantidad,(err)=> {
     console.log('err', err)
  })
}

export default randomNums