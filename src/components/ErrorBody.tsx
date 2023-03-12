import React, { FC } from "react";
import { EmptyTableBody, Center, Loader } from "smarthr-ui";

export const ErrorBody: FC = () => {
  return (
    <EmptyTableBody>
      <Center>ユーザー一覧の取得に失敗しました。</Center>
    </EmptyTableBody>
  );
};
