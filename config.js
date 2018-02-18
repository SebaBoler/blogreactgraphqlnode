const config = {
    port: 9000,
    sqldb: {
        dialect: "mssql",
        server: "localhost",
        port: "1433",
        dialectOptions: {
      // Not needed if you connect to the default instance
        instanceName: "MSSQLSERVER"
        },
    database: "mojaBaza",
    username: "sa",
    password: "SqlDevOps2018"
    }
};

export default config;