import { AppShell, Header, MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { BigHead } from "./components/BigHead/BigHead";
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
        <AppShell
          padding="md"
          navbar={<Navbar></Navbar>}
          header={
            <Header
              height={110}
              p="xs"
              style={{
                borderBottom: "1px solid orange",
              }}
            >
              <BigHead />
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor: "#FDFAF1",
            },
          })}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/highlights" element={<Highlights />} />
            <Route path="/qualifications" element={<Qualifications />} />
            <Route path="/eog" element={<EOG />} />
          </Routes>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
