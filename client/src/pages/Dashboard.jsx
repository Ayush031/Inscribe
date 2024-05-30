import React, { useState } from "react";
import FormDataList from "../components/FormDataList";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Dashboard = () => {
  const [selectedForm, setSelectedForm] = useState("form1");

  return (
    <div>
      <div className="flex items-center mb-4">
        <Select onValueChange={(value) => setSelectedForm(value)}>
          <SelectTrigger className="w-[180px] mt-6">
            <SelectValue placeholder="Select a form" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Forms</SelectLabel>
              <SelectItem value="form1">Faculty/Co-Faculty Advisor</SelectItem>
              <SelectItem value="form2">SECRETARY/JOINT SECRETARY</SelectItem>
              <SelectItem value="form3">
                ADVISORY BOARD: CHIEF ADVISOR/MEMBER OF ADVISORY BOARD
              </SelectItem>
              <SelectItem value="form4">
                PROPOSAL FORM: FORMATION OF ENTITY
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <FormDataList formName={selectedForm} />
    </div>
  );
};

export default Dashboard;
