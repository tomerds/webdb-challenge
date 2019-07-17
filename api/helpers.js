const db = require('../data/dbConfig');

module.exports = {
  postProject: function (project) {
    let query = db('projects');

    return query.insert(project).then(id => id);
  },

  postAction: function (action) {
    let query = db('actions');

    return query.insert(action).then(id => id);
  },

  getActions: function (id) {

    let query = db('projects')

    return query.join('actions', 'projects.id', '=', 'actions.project_id')
      .where('projects.id', id)
      .select('*').from('projects')
      .then(result => result)
  },

  getProject: function (id) {

    let query = db('projects')

    return query.where('id', id)
      .then(result => result)
  },

  getProjects: function () {

    return db('projects');

  },

  getProjectActions: function (id) {

    let query = db('projects');

    return query.where('id', id)
      .then(project => {
        return db('actions').where('project_id', id)
          .then(actions => {
            return {
              project: project,
              actions: actions,
            }
          });
      });

  },
}