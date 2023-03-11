import { Base, Table, Td, Th } from "smarthr-ui";
import useSWR from "swr";

const fetcher = (url: string, method?: string) =>
  fetch(url, { method }).then((res) => res.json());

export default function Home() {
  const { data, isLoading } = useSWR<{ id: string; name: string }[]>(
    "/api/users",
    fetcher
  );

  if (!data || isLoading) return <>is loading...</>;

  return (
    <>
      <main>
        <Base overflow={{ x: "hidden", y: undefined }}>
          <Table>
            <thead>
              <tr>
                <Th>ID</Th>
                <Th>名前</Th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.name}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Base>
      </main>
    </>
  );
}
