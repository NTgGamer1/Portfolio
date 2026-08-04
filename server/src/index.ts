import app from "./app/app";
import { serverConfig } from "./config/server";

const port = serverConfig.port;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
