module.exports = (sequelize, { STRING }) => {
  const User = sequelize.define(
    'User',
    {
      userName: {
        type     : STRING,
        allowNull: false,
      },
      password: {
        type     : STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  User.associate = db => {
    User.hasOne(db.Channel);
  };

  User.prototype.validPassword = (givenpassword, thispassword) => {
    console.log(`${givenpassword} === ${thispassword}`);
    return (givenpassword === thispassword);
  };

  return User;
};