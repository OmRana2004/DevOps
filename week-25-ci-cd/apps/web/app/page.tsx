import { prismaClient } from "@repo/db/client";

export default async function Home() {
  const users = await prismaClient.user.findMany();

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
          <hr />
        </div>
      ))}
      hello world!
    </div>
  );
}