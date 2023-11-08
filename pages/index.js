import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import Modal from './Modal'; // Import the Modal component

export default function Home() {

  const [animalInput, setAnimalInput] = useState("");
  const [animal2Input, setAnimal2Input] = useState("");
  const [resultClass, setResultClass] = useState("");
  const [raceInput, setRaceInput] = useState("");
  const [raceInput2, setRaceInput2] = useState("");
  const [resultRace, setResultRace] = useState("");
  const [classInput, setClassInput] = useState("");
  const [classInput2, setClassInput2] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [skillInput2, setSkillInput2] = useState("");
  const [resultSkill, setResultSkill] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  // This will handle the opening of the modal and prefilling the input
  const openModalWithSelector = (selectorValue, setSelectorInput) => {
    setSelectorInput(selectorValue);
    setModalOpen(true);
  };


  async function getclass(event) {
    event.preventDefault();
    try {
      const response = await fetch(`http://192.168.0.108:8000/class?name=${animalInput}&selector=${animal2Input}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(response => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json()
      }).then(responseData => {
        console.log(responseData); // Handle the response data here
        setResultClass(responseData.content);
      }).catch(error => {
        console.error('Error:', error);
      });
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  async function getRace(event) {
    event.preventDefault();
    try {
      const response = await fetch(`http://192.168.0.108:8000/class?name=${raceInput}&selector=${raceInput2}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(response => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json()
      }).then(responseData => {
        console.log(responseData); // Handle the response data here
        setResultRace(responseData.content);
      }).catch(error => {
        console.error('Error:', error);
      });
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  async function getSkill(event) {
    event.preventDefault();
    try {
      const response = await fetch(`http://192.168.0.108:8000/class?name=${skillInput}&selector=${skillInput2}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(response => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json()
      }).then(responseData => {
        console.log(responseData); // Handle the response data here
        setResultSkill(responseData.content);
      }).catch(error => {
        console.error('Error:', error);
      });
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>DNDD</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
      <img src="/dog.png" className={styles.icon} />
      <h3>DNDD</h3>

      <div className={styles.formContainer}>
        <div className={styles.formSection}>
          <form onSubmit={getclass}>
            <input
              type="text"
              name="animal"
              placeholder="Enter class"
              value={animalInput}
              onChange={(e) => setAnimalInput(e.target.value)}
            />
            <input
              type="text"
              name="animal2"
              placeholder="Enter Selector"
              value={animal2Input}
              onChange={(e) => setAnimal2Input(e.target.value)}
            />
            <input type="submit" value="Find Class Description" />

            <button type="button" onClick={() => openModalWithSelector(animal2Input, setAnimal2Input)}>
              Enter Selector
            </button>
            <input type="submit" value="Find Class Description" />

            <p>{resultClass}</p>
          </form>
        </div>
        <div className={styles.formSection}>
          <form onSubmit={getRace}>
            <input
              type="text"
              name="animal"
              placeholder="Enter race"
              value={raceInput}
              onChange={(e) => setRaceInput(e.target.value)}
            />
            <input
              type="text"
              name="animal2"
              placeholder="Enter selector"
              value={raceInput2}
              onChange={(e) => setRaceInput2(e.target.value)}
            />
            <input type="submit" value="Find Race Description" />
            <p>{resultRace}</p>
          </form>
        </div>
        <div className={styles.formSection}>
          <form onSubmit={getSkill}>
            <input
              type="text"
              name="animal"
              placeholder="Enter skill"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
            />
            <input
              type="text"
              name="animal2"
              placeholder="Enter selector"
              value={skillInput2}
              onChange={(e) => setSkillInput2(e.target.value)}
            />
            <input type="submit" value="Find Skill Description" />
            <p>{resultSkill}</p>
          </form>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          {/* This is a simplified version of the content inside the modal, adjust as needed */}
          <form onSubmit={(e) => {
            e.preventDefault();
            setModalOpen(false);
            // Perform the action with the selected value
          }}>
            <input
              type="text"
              placeholder="Enter Selector"
              value={animal2Input}
              onChange={(e) => setAnimal2Input(e.target.value)}
            />
            <input type="submit" value="Submit Selector" />
          </form>
        </Modal>

    </main>
    </div>
  );
}
