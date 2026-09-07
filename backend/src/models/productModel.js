const { pool } = require('../config/db');

class ProductModel {
  static async findAll() {
    try {
      const [rows] = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
      return rows;
    } catch (error) {
      // Fallback mock data if table doesn't exist yet
      if (error.code === 'ER_NO_SUCH_TABLE') {
        console.warn('⚠️ Table "products" does not exist yet. Returning sample data.');
        return [
          { id: 1, name: 'LeafExtract Pharma Grade', category: 'Herbal Extract', price: 49.99, stock: 120 },
          { id: 2, name: 'BioVital Nutraceutical', category: 'Supplements', price: 29.50, stock: 85 },
          { id: 3, name: 'EcoScience Active Solution', category: 'Biotech Formulation', price: 89.00, stock: 40 },
        ];
      }
      throw error;
    }
  }

  static async findById(id) {
    try {
      const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
      return rows[0] || null;
    } catch (error) {
      if (error.code === 'ER_NO_SUCH_TABLE') {
        return { id, name: 'Sample Product', category: 'Life Science', price: 50.00, stock: 10 };
      }
      throw error;
    }
  }
}

module.exports = ProductModel;
