const amqp = require("amqplib");

const queue = "transaction";

const prepareCreateTransaction = async () => {
  try {
    const connection = await amqp.connect(
      "amqp://root:sauki123@localhost:5672"
    );

    const channel = await connection.createChannel();
    await channel.assertQueue(queue);
    channel.sendToQueue(
      queue,
      Buffer.from(
        JSON.stringify({
          id: 1,
          amount: 10000,
          type: "PAYMENT",
        })
      )
    );
    await channel.close();
  } catch (err) {
    console.log(err.message);
  }
};

prepareCreateTransaction();
