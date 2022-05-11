import { AppShell, Header, MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact } from "./components/contact/Contact";
import { EOG } from "./components/eog/EOG";
import { Highlights } from "./components/highlights/Highlights";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import { Qualifications } from "./components/qualifications/Qualifications";
function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/qualifications" element={<Qualifications />} />
          <Route path="/eog" element={<EOG />} />
        </Routes>

        <AppShell
          padding="md"
          navbar={<Navbar></Navbar>}
          header={
            <Header height={60} p="xs">
              {/* Header content */}
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          {/* Your application here */}
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
