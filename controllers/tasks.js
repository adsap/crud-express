const model = require('../models/tasks')

const controller = {
  getAll: async (req, res) => {
    try {
      const request = {
        page: req.query.page || 1,
        limit: req.query.limit || 10
      };
      request.offset = (Number(request.page) - 1) * Number(request.limit);

      const data = await model.getAll(request);
      res.status(200).json({ status: true, result: data })
    } catch (error) {
      throw new Error(error);
    }
  },
  create: async (req, res) => {
    try {
      const { title, description, completed } = req.body;
      const body = {
        title: title,
        description: description,
        completed: completed,
      };
      const data = await model.create(body);
      res.status(201).json({ status: true, result: data })
    } catch (error) {
      throw new Error(error);
    }
  },
  getById: async (req, res) => {
    try {
      const id = req.params.id;

      const data = await model.getById(id);
      if (!data) res.status(400).json({ status: false, message: 'data not found' });
      res.status(200).json({ status: true, result: data })
    } catch (error) {
      throw new Error(error);
    }
  },
  updateById: async (req, res) => {
    try {
      const id = req.params.id;

      const data = await model.updateById(req.body, id);
      if (!data) res.status(400).json({ status: false, message: 'data not found' });
      res.status(200).json({ status: true, message: 'success' })
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const id = req.params.id;

      const data = await model.deleteById(id);
      if (!data) res.status(400).json({ status: false, message: 'data not found' });
      res.status(200).json({ status: true, message: 'success' })
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = controller;
