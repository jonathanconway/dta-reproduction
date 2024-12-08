import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import "./App.css";

import {
  GovPass,
  GovPassLayout,
  IdentityDocuments,
  PassportConfirm,
  PassportDate,
  PassportDetails,
  PassportNumber,
  DriversLicenceNumber,
  DriversLicenceState,
  DriversLicenceDate,
  DriversLicenceDetails,
  DriversLicenceConfirm,
} from "./govpass";
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

          <Route
            path={paths.govpass.identityDocuments.driversLicenceState.fullPath}
            Component={DriversLicenceState}
          />
          <Route
            path={paths.govpass.identityDocuments.driversLicenceNumber.fullPath}
            Component={DriversLicenceNumber}
          />
          <Route
            path={
              paths.govpass.identityDocuments.driversLicenceDetails.fullPath
            }
            Component={DriversLicenceDetails}
          />
          <Route
            path={paths.govpass.identityDocuments.driversLicenceDate.fullPath}
            Component={DriversLicenceDate}
          />
          <Route
            path={
              paths.govpass.identityDocuments.driversLicenceConfirm.fullPath
            }
            Component={DriversLicenceConfirm}
          />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
