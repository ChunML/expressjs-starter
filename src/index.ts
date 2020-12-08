import express from "express";

const main = (): void => {
  const app = express();

  app.get("/", (_, res) => {
    res.json({ status: "success" });
  });

  app.listen(8000, () => {
    console.log(
      "server is listening at http://localhost:8000. Check it outtttttt!"
    );
  });
};

main();
