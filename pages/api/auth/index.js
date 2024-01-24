export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
  if (req.method == "POST") {
    const { username, password } = req.body;
    const data = {
      name: username,
      email: `${username}@gmail.com`,
      key: password,
      secret: "Secret",
    };
    res.json(data)
    console.log(data);
  } else {
    console.log("no");
  }
}
