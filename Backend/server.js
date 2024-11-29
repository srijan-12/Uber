const http = require("http");
const app = require("./app");
const connectToDB = require("./dbConfig")
const port = process.env.PORT || 3000

const server = http.createServer(app);

server.listen(port,()=>{
    connectToDB().then(()=>console.log(`Server is running at port ${port}`)).catch((err)=>console.log(err))
})