import logo from "./images/logo.gif";

import Path from 'path';
import uploadFileToBlob, { isStorageConfigured } from './azure-storage-blob';
import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup, Card, Form, Accordion, Image } from "react-bootstrap";
import review_video from "./images/practice-video1.png";
import connected_data1 from "./images/connected-sun-data1.png";
import connected_data2 from "./images/connected-sun-image2.png";
import foundation_pavel from "./images/foundation-pavel.png";

const storageConfigured = isStorageConfigured();

function Home() {
// all blobs in container
  const [blobList, setBlobList] = useState('');

  // current file to upload into container
  const [fileSelected, setFileSelected] = useState(null);

  // UI/form management
  const [uploading, setUploading] = useState(false);
  const [inputKey, setInputKey] = useState(Math.random().toString(36));

  const onFileChange = (event) => {
    // capture file into state
    setFileSelected(event.target.files[0]);
  };

  const onFileUpload = async () => {
    // prepare UI
    setUploading(true);

    // *** UPLOAD TO AZURE STORAGE ***
    const blobsInContainer = await uploadFileToBlob(fileSelected);

    // prepare UI for results
    setBlobList(blobsInContainer);

    // reset state/form
    setFileSelected(null);
    setUploading(false);
    setInputKey(Math.random().toString(36));
  };

  // display form
  const DisplayForm = () => (
    <div>
      <input type="file" onChange={onFileChange} key={inputKey || ''} />
      <button type="submit" onClick={onFileUpload}>
        Upload!
          </button>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload a new session for review!</Form.Label>
              <Form.Control type="file" />
        </Form.Group>
    </div>
  )

  // display file name and image
  const DisplayImagesFromContainer = () => (
    <div>
      <h2>Container items</h2>
      <ul>
        {blobList.map((item) => {
          return (
            <li key={item}>
              <div>
                {Path.basename(item)}
                <br />
                <img src={item} alt={item} height="200" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div>
      <h2> Welcome! </h2>
        <p>The mission of this initiative is to help people stay physically and mentally fit while staying safe during the unprecedented times of the pandemic and beyond, by improving the online yoga practice experience.</p>
        <br />
        <p>The switch to remote work, lesser physical activities and social isolation have created new challenges. With the increased level of stress and loss of jobs worldwide, the development of affordable, safe, and efficient ways to maintain physical and mental health has become more important. Yoga is a great way to achieve this. However, since the beginning of the pandemics, fitness centers and yoga studios around the world have been either fully or partially unavailable due to distancing restrictions. The practitioner’s ability to receive guidance from professional instructors has significantly reduced. Navigating the ocean of online sessions published by fitness centers and independent instructors is challenging, especially for beginners and people with injuries or other health issues. In our capstone project we set a goal to make the growing amount of online video content for at-home yoga practice more accessible and searchable. Our work will empower instructors, their students, and online fitness platforms to build personalized and balanced program of exercises with AI-powered tools for summarization of videos and recommendation engine for picking practices that best match the user’s needs.  .</p>
        <img src={logo} alt="loading..." />
        <div >
        <h2>Review My Sessions</h2>
        {storageConfigured && !uploading && DisplayForm()}
        {storageConfigured && uploading && <div>Uploading</div>}
        {storageConfigured && blobList.length > 0 && DisplayImagesFromContainer()}
        {!storageConfigured && <div> <p>Storage is not configured. </p></div>}
        <h3> Here are your past sessions </h3>
      </div>
    </div>
  );
}

export default Home;