import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import "./App.css";
import { GovPass, PassportDetails, PassportConfirm } from "./govpass";

import { routes } from "./routes";
import { Switchboard } from "./switchboard";

const queryClient = new QueryClient();

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
