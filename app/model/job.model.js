const Sequelize = require("sequelize");
const sequelize = require("../db");
const { v4: uuidv4 } = require("uuid");

module.exports = () => {
  const Job = sequelize.define("Job", {
    userId: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: () => uuidv4(),
    },
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4(),
    },
    jobDescription: {
      type: Sequelize.TEXT,
      allowNull: false,
    },

    rolesAndResponsibilities: {
      type: Sequelize.TEXT,
      allowNull: false,
    },

    qualifications: {
      type: Sequelize.TEXT,
      allowNull: false,
    },

    minYearExperience: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    maxYearExperience: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    // job type enum :- FULLTIME, PARTTIME, FREELANCE

    jobType: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    // job category enum :- Sales, Development, Design

    jobCategory: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    title: {
      type: Sequelize.STRING,
    },

    city: {
      type: Sequelize.STRING,
    },
  });

  Job.associate = (model) => {
    Job.belongTo(model.User, {
      foreignKey: "userId",
      as: "user",
    });

    Job.hasMany(model.JobApplication, {
      foreignKey: "id",
      as: "jobApplications",
    });
  };

  return Job;
};
