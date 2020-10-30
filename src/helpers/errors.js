export default function onError (objectError, errors) {
  errors.map((item) => {
    objectError[item.path] = item.message
  })

  return objectError
}
