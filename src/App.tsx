import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import "./App.css";

import {
  GovPass,
  IdentityDocuments,
  PassportConfirm,
  PassportDate,
  PassportDetails,
  PassportNumber,
} from "./govpass";
import { GovPassLayout } from "./govpass/govpass-layout";
import { paths } from "./paths";
import { queryClient } from "./query-client";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<GovPassLayout />}>
          <Route index element={<GovPass />} />
          <Route
            path={paths.govpass.identityDocuments.fullPath}
            Component={IdentityDocuments}
          />
          <Route
            path={paths.govpass.identityDocuments.passportNumber.fullPath}
            Component={PassportNumber}
          />
          <Route
            path={paths.govpass.identityDocuments.passportDetails.fullPath}
            Component={PassportDetails}
          />
          <Route
            path={paths.govpass.identityDocuments.passportDate.fullPath}
            Component={PassportDate}
          />
          <Route
            path={paths.govpass.identityDocuments.passportConfirm.fullPath}
            Component={PassportConfirm}
          />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
