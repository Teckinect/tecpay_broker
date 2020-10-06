const { ServiceBroker } = require("moleculer");
const ApiService = require("moleculer-web");

const broker = new ServiceBroker({
  namespace: "tecpay",
  nodeID: "broker",
  logger: false,
  transporter: {
    type: "TCP",
  },
  hotReload: true,
});

broker.createService({
  mixins: [ApiService],
  settings: {
    port: 2999,
    cors: {
      origin: "*",
      credentials: false,
      allowedHeaders: "*",
    }
  },
  name: 'broker',
});

broker.start()
	.catch(err => console.error(`Error occured! ${err.message}`));