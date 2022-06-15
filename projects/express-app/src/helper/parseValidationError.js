const parseValidationError = (err) => {
  const errors = []

  err.details.forEach(detail => {
    errors.push({
      message: detail.message,
      key: detail.context.key
    })
  })

  return errors
}

module.exports = parseValidationError
