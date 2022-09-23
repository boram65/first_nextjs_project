export default function hendler(req, res) {
  switch (req.method) {
    case "GET":
      res.json({ ok: true, message: "GET call" });
      break;
    case "POST":
      res.json({ ok: true, message: "POST call" });
      break;
    case "DELETE":
      res.json({ ok: true, message: "DELETE call" });
      break;
  }
}
