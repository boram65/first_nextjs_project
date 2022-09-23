import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";

export default function UsersSSR(props) {
  const [users, setUsers] = useState([]);

  console.log(props);

  return (
    <Layout>
      <div className="text-4xl">사용자 목록 페이지(SSR)</div>

      {0 === props.users.length ? <div>SSR로딩중...</div> : null}

      {props.users?.map(user => (
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

export async function getServerSideProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  //console.log(res.data);

  return {
    props: {
      users: res.data,
    },
  };
}
