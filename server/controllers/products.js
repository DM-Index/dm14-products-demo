const axios = require("axios");
let products = [];

module.exports = {
  getProducts(req, res) {
    // axios.get('/some page', (res)=> products = res.data);
    return res.status(200).json(products);
  }
};

const set = new Set();

axios.get("http://dogcompanydtx.com/api/products").then(({ data }) => {
  products = data.filter((cur, ind) => {
    if (!set.has(cur.title)) {
      set.add(cur.title);
      cur.id = ind;
      return true;
    }
  });
});
