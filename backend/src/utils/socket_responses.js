const RESPONSE_MSG = {
  initial: {
    sendBy: 'server',
    message: 'Hola! como estas?, cual es tu nombre?',
  },
  '00': (message) => {
    return {
      sendBy: 'server',
      message: `Bienvenido ${message}!,\nesto es una pagina de muestra.\n¿Te gusta la pagina hasta ahora ?\n[1]: Me gusta mucho! vamos por mas!\n[2]: la verdad que no, me aburre`,
    }
  },
  '01': {
    sendBy: 'server',
    message: `esto es solo una muestra,\n Me alegro que te guste!\nnos vemos!`,
  },
  '02': {
    sendBy: 'server',
    message: `esto es solo una muestra,\n que lastima no te guste, vamos a mejorarla pronto!\nnos vemos!`,
  },
  wrong: {
    sendBy: 'server',
    message: `Perdón!,\n soy nuevo en esto y no entiendo mucho\nsolo puedes poner 1 o 2, intenta de nuevo...`,
  },
  final: {
    sendBy: 'server',
    message: `Lo siento!,\n pero no tengo mucho mas para decir...\nNos vemos Pronto!`,
  },
}

export default RESPONSE_MSG
