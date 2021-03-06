import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Curso de React",
          type: "withdraw",
          category: "Dev",
          amount: 3000,
          createdAt: new Date("2021-09-12 20:00:00"),
        },
        {
          id: 2,
          title: "Salário",
          type: "deposit",
          category: "Trabalho",
          amount: 7000,
          createdAt: new Date("2021-08-12 08:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
