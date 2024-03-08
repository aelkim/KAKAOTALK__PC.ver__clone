import "./styles/App.css";
import Navigation from "./components/navigation.jsx";
import ScreenHeader from "./components/screen-header.jsx";
import UserComponent from "./components/user-component.jsx";
import { Route, Routes } from "react-router-dom";
import Chats from "./pages/chats";
import More from "./pages/more";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <ScreenHeader title="친구" />
              <UserComponent />
            </>
          }
        ></Route>
        <Route
          path="/chats"
          element={
            <>
              <Navigation />
              <ScreenHeader title="채팅" />
              <Chats />
            </>
          }
        ></Route>
        <Route
          path="/more"
          element={
            <>
              <Navigation />
              <ScreenHeader title="더보기" />
              <More />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}
