import React, { FC } from "react";
import { EmptyTableBody, Center, Loader } from "smarthr-ui";

export const LoadingBody: FC = () => {
  return (
    <EmptyTableBody>
      <Center>
        <Loader />
      </Center>
    </EmptyTableBody>
  );
};
