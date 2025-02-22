import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourseList from "./CourseList";
import OtpForm from "./OtpForm";
import React from "react";
import { Welcome } from "./Welcome";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="otp-form" element={<OtpForm />} />
          <Route path="course-list" element={<CourseList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
