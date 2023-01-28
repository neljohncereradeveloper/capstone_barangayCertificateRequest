import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import app from "../../assets/css/app.module.css";

function ProgressBar({ file, setFile, role, setRole, id }) {
  const { url, progress } = useStorage(file, role, id);

  useEffect(() => {
    if (url) {
      setFile(null);
      setRole(null);
    }
  }, [url, setFile, setRole]);

  if (id === null) return null;

  return (
    <div className={app.progress} style={{ width: progress + "%" }}>
      {progress + "%"}
    </div>
  );
}

export default ProgressBar;
