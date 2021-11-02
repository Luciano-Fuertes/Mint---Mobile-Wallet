const server = require("./src/app.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  let port_number = server.listen(process.env.PORT || 3001);
  server.listen(port_number, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
