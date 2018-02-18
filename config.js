const config = {
    port: 9000,
    sqldb: {
        dialect: "mssql",
        server: "localhost",
        port: "1433",
        dialectOptions: {
        instanceName: "MSSQLSERVER"
        },
    database: "bazasql",
    username: "sa",
    password: "SqlDevOps2018"
    }
};

export default config;