const { API_KEY } = process.env

module.exports = {
  Convert: async (req, res) => {
    console.log(API_KEY)
    res.sendStatus(200)
  }
}