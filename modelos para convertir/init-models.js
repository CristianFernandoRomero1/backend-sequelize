var DataTypes = require("sequelize").DataTypes;
var _contrato = require("./contrato");
var _dependencias = require("./dependencias");
var _firma = require("./firma");
var _images = require("./images");
var _inspeccion = require("./inspeccion");
var _inspeccion_pregunta = require("./inspeccion_pregunta");
var _inspectores = require("./inspectores");
var _migrations = require("./migrations");
var _preguntas = require("./preguntas");
var _preguntas_categoria = require("./preguntas_categoria");
var _tablaroles = require("./tablaroles");
var _tablausuarios = require("./tablausuarios");
var _tecnico_incumplimientos = require("./tecnico_incumplimientos");
var _tecnico_inspeccion = require("./tecnico_inspeccion");
var _tecnicos = require("./tecnicos");
var _vehiculo_inspeccion = require("./vehiculo_inspeccion");

function initModels(sequelize) {
  var contrato = _contrato(sequelize, DataTypes);
  var dependencias = _dependencias(sequelize, DataTypes);
  var firma = _firma(sequelize, DataTypes);
  var images = _images(sequelize, DataTypes);
  var inspeccion = _inspeccion(sequelize, DataTypes);
  var inspeccion_pregunta = _inspeccion_pregunta(sequelize, DataTypes);
  var inspectores = _inspectores(sequelize, DataTypes);
  var migrations = _migrations(sequelize, DataTypes);
  var preguntas = _preguntas(sequelize, DataTypes);
  var preguntas_categoria = _preguntas_categoria(sequelize, DataTypes);
  var tablaroles = _tablaroles(sequelize, DataTypes);
  var tablausuarios = _tablausuarios(sequelize, DataTypes);
  var tecnico_incumplimientos = _tecnico_incumplimientos(sequelize, DataTypes);
  var tecnico_inspeccion = _tecnico_inspeccion(sequelize, DataTypes);
  var tecnicos = _tecnicos(sequelize, DataTypes);
  var vehiculo_inspeccion = _vehiculo_inspeccion(sequelize, DataTypes);

  inspeccion.belongsTo(contrato, { as: "CONTRATO", foreignKey: "CONTRATO_ID"});
  contrato.hasMany(inspeccion, { as: "inspeccions", foreignKey: "CONTRATO_ID"});
  tecnicos.belongsTo(contrato, { as: "id_contrato_contrato", foreignKey: "id_contrato"});
  contrato.hasMany(tecnicos, { as: "tecnicos", foreignKey: "id_contrato"});
  firma.belongsTo(inspeccion, { as: "id_inspeccion_inspeccion", foreignKey: "id_inspeccion"});
  inspeccion.hasMany(firma, { as: "firmas", foreignKey: "id_inspeccion"});
  images.belongsTo(inspeccion, { as: "id_inspeccion_inspeccion", foreignKey: "id_inspeccion"});
  inspeccion.hasMany(images, { as: "images", foreignKey: "id_inspeccion"});
  inspeccion_pregunta.belongsTo(inspeccion, { as: "INSPECCION", foreignKey: "INSPECCION_id"});
  inspeccion.hasMany(inspeccion_pregunta, { as: "inspeccion_pregunta", foreignKey: "INSPECCION_id"});
  tecnico_incumplimientos.belongsTo(inspeccion, { as: "id_inspeccion_inspeccion", foreignKey: "id_inspeccion"});
  inspeccion.hasMany(tecnico_incumplimientos, { as: "tecnico_incumplimientos", foreignKey: "id_inspeccion"});
  tecnico_inspeccion.belongsTo(inspeccion, { as: "INSPECCION", foreignKey: "INSPECCION_id"});
  inspeccion.hasMany(tecnico_inspeccion, { as: "tecnico_inspeccions", foreignKey: "INSPECCION_id"});
  vehiculo_inspeccion.belongsTo(inspeccion, { as: "id_inspeccion_inspeccion", foreignKey: "id_inspeccion"});
  inspeccion.hasMany(vehiculo_inspeccion, { as: "vehiculo_inspeccions", foreignKey: "id_inspeccion"});
  inspeccion.belongsTo(inspectores, { as: "INSPECTORE", foreignKey: "INSPECTORES_id"});
  inspectores.hasMany(inspeccion, { as: "inspeccions", foreignKey: "INSPECTORES_id"});
  inspeccion_pregunta.belongsTo(preguntas, { as: "PREGUNTA", foreignKey: "PREGUNTAS_id"});
  preguntas.hasMany(inspeccion_pregunta, { as: "inspeccion_pregunta", foreignKey: "PREGUNTAS_id"});
  preguntas.belongsTo(preguntas_categoria, { as: "PREGUNTAS_CATEGORIum", foreignKey: "PREGUNTAS_CATEGORIA_id"});
  preguntas_categoria.hasMany(preguntas, { as: "pregunta", foreignKey: "PREGUNTAS_CATEGORIA_id"});

  return {
    contrato,
    dependencias,
    firma,
    images,
    inspeccion,
    inspeccion_pregunta,
    inspectores,
    migrations,
    preguntas,
    preguntas_categoria,
    tablaroles,
    tablausuarios,
    tecnico_incumplimientos,
    tecnico_inspeccion,
    tecnicos,
    vehiculo_inspeccion,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
