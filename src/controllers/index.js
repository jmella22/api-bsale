import { getConnection } from "../database/db";

// const getAllProducts = async (req, res) => {
//   try {
//     const connection = await getConnection();
//     const result = await connection.query(
//       "SELECT product.id, product.name, product.url_image, product.price, discount, category.name AS category FROM bsale_test.product INNER JOIN bsale_test.category ON bsale_test.category.id = bsale_test.product.category"
//     );
//     res.json(result);
//   } catch (error) {
//     res.status(500).send(error.mesage);
//   }
// };
const getProducts = async (req, res) => {
  const { category } = req.params;
  const { name } = req.query;

  if (!!name === true) {
    if (category == 0) {
      try {
        const connection = await getConnection();
        const result = await connection.query(
          `SELECT product.id, product.name, product.url_image, product.price, discount, category.name AS category FROM bsale_test.product INNER JOIN bsale_test.category ON bsale_test.category.id = bsale_test.product.category WHERE bsale_test.product.name LIKE "%${name}%"`
        );
        return res.json(result);
      } catch (error) {
        return res.status(500).send(error.mesage);
      }
    } else {
      try {
        const connection = await getConnection();
        const result = await connection.query(
          `SELECT product.id, product.name, product.url_image, discount, product.price, category.name AS category FROM bsale_test.product INNER JOIN bsale_test.category ON bsale_test.category.id = bsale_test.product.category where bsale_test.product.category = ${category} AND bsale_test.product.name LIKE "%${name}%"`
        );
        return res.json(result);
      } catch (error) {
        return res.status(500).send(error.mesage);
      }
    }
  }
  if (!!name === false) {
    if (category == 0) {
      try {
        const connection = await getConnection();
        const result = await connection.query(
          `SELECT product.id, product.name, product.url_image, product.price, discount, category.name AS category FROM bsale_test.product INNER JOIN bsale_test.category ON bsale_test.category.id = bsale_test.product.category`
        );
        return res.json(result);
      } catch (error) {
        return res.status(500).send(error.mesage);
      }
    } else {
      try {
        const connection = await getConnection();
        const result = await connection.query(
          `SELECT product.id, product.name, product.url_image, discount, product.price, category.name AS category FROM bsale_test.product INNER JOIN bsale_test.category ON bsale_test.category.id = bsale_test.product.category where bsale_test.product.category = ${category}`
        );
        return res.json(result);
      } catch (error) {
        return res.status(500).send(error.mesage);
      }
    }
  }
};

const getAllCategory = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM bsale_test.category");
    return res.json(result);
  } catch (error) {
    return res.status(500).send(error.mesage);
  }
};

module.exports = {
  getProducts,
  getAllCategory,
};
