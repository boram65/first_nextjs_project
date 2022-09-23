import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";

export default function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data));
  }, []);

  console.log(users[0]);

  return (
    <Layout>
      <div className="text-4xl">사용자 목록 페이지</div>

      {0 === users.length ? <div>로딩중...</div> : null}

      {users?.map(user => (
        <div key={user.id} className="border m-5 p-3">
          <div className="text-2xl font-bold">{user.username}</div>
          <div>{user.name}</div>
          <div className="text-blue-500">{user.email}</div>
          <a href={`https://${user.website}`}>{user.website}</a>
        </div>
      ))}
    </Layout>
  );
}
