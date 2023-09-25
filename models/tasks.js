const connection = require("../config");

const model = {
  getAll: async (req) => {
    try {
      const query = `
        SELECT 
          id,
          title,
          description,
          completed 
        FROM 
          tasks 
        LIMIT ${req.limit} OFFSET ${req.offset}
      `;
      const [rows] = await connection.query(query);
      return rows;
    } catch (error) {
      throw new Error(error);
    }
  },
  create: async (body) => {
    try {
      const query = 'INSERT INTO tasks SET ?';
      const [rows] = await connection.query(query, body);
	    return rows.insertId;
    } catch (error) {
      throw new Error(error);
    }
  },
  getById: async (id) => {
    try {
      const query = `
        SELECT 
          id,
          title,
          description,
          completed 
        FROM 
          tasks 
        WHERE
          id = ?
      `;
      const [rows] = await connection.query(query, id);
      return rows[0];
    } catch (error) {
      throw new Error(error);
    }
  },
  updateById: async (body, id) => {
    try {
      const query = `
        UPDATE 
          tasks 
        SET ?
        WHERE id = ?
      `;
      await connection.query(query, [body, id]);
      return true;
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteById: async (id) => {
    try {
      const query = `
        DELETE FROM 
          tasks
        WHERE id = ?
      `;
      await connection.query(query, id);
      return true;
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = model;
