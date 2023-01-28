import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../../firebase/config";

const useStorage = (file, role, id) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // for updating firestore
    if (id === null) {
      console.log("return null");
      return null;
    }
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        const rolee = role;
        collectionRef.doc(id).set({ createdAt, url, rolee });
        //for insert
        // collectionRef.add({ createdAt, url, rolee });
        setUrl(url);
      }
    );
  }, [file, role, id]);

  return { progress, url, error };
};

// export default App;
export default useStorage;
