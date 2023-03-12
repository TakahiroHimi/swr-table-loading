import { ErrorBody } from "@/components/ErrorBody";
import { LoadingBody } from "@/components/LoadingBody";
import { LoadingTableBodyCover } from "@/components/LoadingTableBodyCover";
import { useState } from "react";
import {
  ActionDialog,
  Base,
  Button,
  Cluster,
  Heading,
  Stack,
  Table,
  Td,
  Th,
} from "smarthr-ui";
import styled, { css } from "styled-components";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, method?: string) =>
  fetch(url, { method }).then((res) => res.json());

const usersAPIPath = "/api/users";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data, error, mutate, isLoading } = useSWR<
    { id: string; name: string }[]
  >(usersAPIPath, fetcher, { keepPreviousData: true });

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
              {error ? (
                <ErrorBody />
              ) : !data ? (
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
                  <tr>
                    <Td colSpan={2}>
                      <Cluster justify="center">
                        <Button
                          variant="primary"
                          onClick={() => setIsDialogOpen(true)}
                          disabled={isLoading}
                        >
                          ユーザーを追加
                        </Button>
                      </Cluster>
                    </Td>
                  </tr>
                </StyledTbody>
              )}
            </Table>
          </Base>
        </Stack>
        <ActionDialog
          title="ユーザーの追加"
          actionText="追加"
          onClickAction={async () => {
            await trigger();
            setIsDialogOpen(false);
            await mutate(undefined);
          }}
          onClickClose={() => setIsDialogOpen(false)}
          isOpen={isDialogOpen}
          responseMessage={isMutating ? { status: "processing" } : undefined}
        >
          <StyledDialogChildren>
            ユーザーを追加します。よろしいですか？
          </StyledDialogChildren>
        </ActionDialog>
      </main>
    </>
  );
}

const StyledTbody = styled.tbody`
  position: relative;
`;

const StyledDialogChildren = styled.div(
  ({ theme: { space } }) => css`
    padding: ${space(1.5)} ${space(2)};
  `
);
