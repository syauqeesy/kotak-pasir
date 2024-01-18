const amqp = require("amqplib");

const queue = "transaction";

const createTransaction = async () => {
  try {
    const connection = await amqp.connect(
      "amqp://root:sauki123@localhost:5672"
    );

    const channel = await connection.createChannel();
    while (true) {
      await channel.consume(queue, (message) => {
        const data = JSON.parse(message.content.toString());

        console.log(
          `${data.id}: ${
            data.type === "PAYMENT" ? "Payment" : "Disbursement"
          } transaction with amount ${data.amount} has been created.`
        );

        channel.ack(message);
      });
    }
  } catch (err) {
    console.log(err.message);
  }
};

createTransaction();
