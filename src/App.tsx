// Импортируем BrowserRouter, Route, Routes для настройки маршрутизации


import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Layout from "components/Layout/Layout";
import GlobalStyles from "styles/GlobalStyles";
import Layout from "lessons/Lesson_15/components/Layout/Layout";
import Employee from "lessons/Lesson_15/components/CreateEmployee/Employee";
import Employees from "lessons/Lesson_15/components/Employees/Employees";
// import Home from "pages/EmployeeApp/Home/Home";
// import About from "pages/EmployeeApp/About/About";
// import LogIn from "pages/EmployeeApp/LogIn/LogIn";
// import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";
// import Clients from "pages/EmployeeApp/Clients/Clients";
// import Client2 from "pages/EmployeeApp/Clients/AllClients/Client2";
// import Client1 from "pages/EmployeeApp/Clients/AllClients/Client1";
// import Client3 from "pages/EmployeeApp/Clients/AllClients/Client3";
// Lessons
// import Lesson_06 from "lessons/lesson_06/Lesson_06";
// import Lesson_07 from "./lessons/lesson_07/Lesson_07";
// import Lesson_08 from "lessons/lesson_08/Lesson_08";
// import Lesson_09 from "lessons/lesson_09/Lesson_09";
// import Lesson_10 from "lessons/lesson_10/Lesson_10";
// import Lesson_12 from "lessons/Lesson_12/Lesson_12";
// import Lesson_14 from "lessons/Lesson_14/Lesson_14";
// Homeworks
// import Homework_06 from "./homeworks/homework_06/Homework_06";
// import Homework_07 from "./homeworks/homework_07/Homework_07";
// import Homework_08 from "homeworks/homework_08/homework_08";
// import Homework_09 from "homeworks/homework_09/Homework_09";
// import Homework_10 from "homeworks/homework_10/homework_10";
// import Homework_12 from "homeworks/homework_12/Homework_12";
// import Homework_14 from "homeworks/homework_14/Homework_14";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="*" element="Page Not Found" />
          <Route path="/clients" element={<Clients />} />
              <Route path="/clients/client1" element={<Client1 />} />
          <Route path="/clients/client2" element={<Client2 />} />
          <Route path="/clients/client3" element={<Client3 />} /> */}
          <Route path="/employee" element={<Employee />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </Layout>
      {/* LESSONS */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      {/* <Lesson_09 /> */}
      {/* <Lesson_10 /> */}
      {/* <Lesson_12 /> */}
      {/* <Lesson_14 /> */}
      {/* HOMEWORKS */}
      {/* <Homework_06 /> */}
      {/* <Homework_07 /> */}
      {/* <Homework_08 /> */}
      {/* <Homework_09 /> */}
      {/* <Homework_10 /> */}
      {/* <Homework_12 /> */}
      {/* <Homework_14 /> */}
          </BrowserRouter>
  );
}

export default App;
        