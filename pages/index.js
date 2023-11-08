import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {

  const [animalInput, setAnimalInput] = useState("");
  const [animal2Input, setAnimal2Input] = useState("");
  const [result, setResult] = useState("");


  async function getclass(event) {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/class?name=${animalInput}&selector=${animal2Input}`, {
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
        setResult(responseData.content);
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
          <p>{result}</p>
        </form>

      </main>
    </div>
  );
}
