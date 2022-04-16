const sg = require("@sendgrid/mail");

module.exports = {
  async sendMail(req, res) {
    const { name, email, message } = req.body;

    const { SENDGRID_API_KEY, OWNER_EMAIL } = process.env;

    sg.setApiKey(SENDGRID_API_KEY);
    const msg = {
      to: OWNER_EMAIL, // Change to your recipient
      from: "ricardo.brasileiro.gx@gmail.com", // Change to your verified sender
      subject: "Contact from portfolio",
      // text: message,
      html: `
        <h3>${name}</h3>
        <h4>From: ${email}</h4>
        <p>${message}</p>
      `,
    };
    await sg
      .send(msg)
      .then(() => {
        console.log("Email sent");
        return res.status(200).json({ message: "Sent" });
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).json({ message: "Sent" });
      });
  },
};
