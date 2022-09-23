import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";

const 원본ID = "dowon";
const 원본PW = "5560";

export default function hendler(req, res) {
  console.log(req.body);

  const { id, pw } = req.body;

  if ("POST" !== req.method) {
    return res
      .status(405)
      .json({ ok: false, message: "지원하지 않는 메서드야" });
  }

  if (!id) {
    return res.json({ ok: false, message: "아이디를 입력하세요" });
  }
  if (!pw) {
    return res.json({ ok: false, message: "비밀번호를 입력하세요" });
  }

  if (id === 원본ID && pw === 원본PW) {
    res.json({ ok: true, message: "로그인 됨" });
  } else {
    res.json({ ok: true, message: "아이디 및 비밀번호 불일치" });
  }
}
