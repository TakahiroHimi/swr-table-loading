import { LoadingBody } from "@/components/LoadingBody";
import { LoadingTableBodyCover } from "@/components/LoadingTableBodyCover";
import {
  Base,
  Button,
  Cluster,
  Heading,
  Stack,
  Table,
  Td,
  Th,
} from "smarthr-ui";
import styled from "styled-components";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, method?: string) =>
  fetch(url, { method }).then((res) => res.json());

const usersAPIPath = "/api/users";

export default function Home() {
  const { data, mutate, isLoading } = useSWR<{ id: string; name: string }[]>(
    usersAPIPath,
    fetcher,
    { keepPreviousData: true }
  );
  const { trigger, isMutating } = useSWRMutation(
    usersAPIPath,
    () => fetcher(usersAPIPath, "POST"),
    { revalidate: false }
  );

  return (
    <>
      <main>
        <Stack>
          <Heading>ユーザー一覧</Heading>
          <Base overflow={{ x: "hidden", y: undefined }}>
            <Table>
              <thead>
                <tr>
                  <Th>ID</Th>
                  <Th>名前</Th>
                </tr>
              </thead>
              {!data ? (
                <LoadingBody />
              ) : (
                <StyledTbody>
                  {isLoading && <LoadingTableBodyCover />}
                  {data.map((user) => (
                    <tr key={user.id}>
                      <Td>{user.id}</Td>
                      <Td>{user.name}</Td>
                    </tr>
                  ))}
                </StyledTbody>
              )}
            </Table>
          </Base>
          <Cluster justify="center">
            <Button
              variant="primary"
              onClick={async () => {
                await trigger();
                await mutate(undefined);
              }}
              loading={isMutating}
            >
              {isMutating ? "追加中" : "ユーザーを追加"}
            </Button>
          </Cluster>
        </Stack>
      </main>
    </>
  );
}

const StyledTbody = styled.tbody`
  position: relative;
`;
