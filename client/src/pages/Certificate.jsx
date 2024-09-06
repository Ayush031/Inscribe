import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import FormInput from "../components/FormInput";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

const Certificate = () => {
  const [file, setFile] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [certificateData, setCertificateData] = useState({
    name: "",
    date: "",
  });

  const navigate = useNavigate();

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCertificateData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/user/submit-certificate",
        certificateData
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Error submitting form");
      console.error("Error submitting form:", error);
    }
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:5000/user/submit-file", formData)
      .then((response) => {
        alert("File uploaded successfully");
        response.status(200).send("File uploaded successfully");
      })
      .catch((error) => {
        console.log("Error uploading file");
        response.status(500).send("Error processing file");
      });
  };

  return (
    <div className="flex gap-10 items-start justify-between m-10">
      <div className="basis-1/2 border-r-2 border-slate-400 text-left mx-auto p-4 sm:p-8 px-20 flex flex-col justify-between">
        <h2 className="font-bold text-lg lg:text-xl text-center mb-10 font-mono">
          Generate Group Certificates
        </h2>
        <div className="flex flex-col gap-7">
          <div className="flex gap-2.5">
            <Input
              id="certifcatesData"
              type="file"
              accept=".xlsx"
              onChange={onFileChange}
              className="flex flex-col items-start"
            />
            <Button onClick={onFileUpload}>Upload</Button>
          </div>
          <Label>
            Note: Excel File must contain columns for Name and Date.
          </Label>
        </div>
      </div>
      <div className="basis-1/2">
        <form onSubmit={handleSubmit} className="text-left mx-auto p-4 sm:p-8">
          <h2 className="font-bold text-lg lg:text-xl text-center font-mono">
            Generate Individual Certificate
          </h2>
          <FormInput
            label="Full Name"
            type="text"
            name="name"
            value={certificateData.name}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Proposed Date:"
            type="date"
            name="date"
            value={certificateData.date}
            onChange={handleChange}
            required
          />
          <div className="flex justify-between">
            <Button type="submit">
              Submit Certificate
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Certificate;
