const config = {
    port: 9000,
    sqldb: {
        dialect: "mssql",
        server: "192.168.1.230",
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