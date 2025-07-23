"use client"
import {React,Suspense} from "react";
import DiplomaCourses from "./course";

const Diploma = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
     <DiplomaCourses/>
    </Suspense>
  );
};

export default Diploma;
