import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import "./App.css";
import { GovPass, PassportConfirm, PassportDetails } from "./govpass";

import { queryClient } from "./query-client";
import { routes } from "./routes";
import { Switchboard } from "./switchboard";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path={routes.switchboard} element={<Switchboard />} />
        <Route
          path={routes.govpass.identityDocuments.passportDetails.index}
          element={<PassportDetails />}
        />
        <Route
          path={routes.govpass.identityDocuments.passportConfirm.index}
          element={<PassportConfirm />}
        />
        <Route path={routes.govpass.index} element={<GovPass />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
