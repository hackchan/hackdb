'use-strict'
const test = require('ava')
const proxyquire = require('proxyquire')
const sinon = require('sinon')

let config = {
  logging: function () {}
}

let MetricStub = {
  belongsTo: sinon.spy()
}

let AgentStub = null
let db = null
let sandbox = null
// hook
test.beforeEach(async () => {
  sandbox = sinon.sandbox.create();
    AgentStub = {
    hasMany: sandbox.spy()
  } 
  
  const setupDatabase = proxyquire('../', {
    './models/agent': () => AgentStub,
    './models/metrict': () => MetricStub
  }) 
  //const setupDatabase = require('../')
  db = await setupDatabase(config)
})

test.afterEach(() => {
  sandbox && sinon.sandbox.restore()
})

test('Agent', t => {
  t.truthy(db.Agent, 'Agent service should exist')
})

test.serial('Setup', t => {
  t.true(AgentStub.hasMany.called, 'AgentModel.hasMany was executed')
  t.true(AgentStub.hasMany.calledWith(MetricStub), 'Argument should be the MetricModel')
  t.true(MetricStub.belongsTo.called, 'MetricModel.belongsTo was executed')
  t.true(MetricStub.belongsTo.calledWith(AgentStub), 'Argument should be the AgentModel')
})
