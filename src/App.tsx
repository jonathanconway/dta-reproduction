import { Route, Routes } from "react-router";
import "./App.css";
import { GovPass, govPassPath } from "./govpass";
import { Switchboard } from "./switchboard";
import {
  EnterPassportDetails,
  enterPassportDetailsPath,
} from "./govpass/identity-documents/enter-passport-details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Switchboard />} />
        <Route
          path={enterPassportDetailsPath}
          element={<EnterPassportDetails />}
        />
        <Route path={govPassPath} element={<GovPass />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
