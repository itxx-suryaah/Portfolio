import { useState } from "react";
import React from "react";
import styles from '../styles/Livecode.module.css';

export default function CodeEditor() {
  const [code, setCode] = useState('// Write your code here\nconsole.log("Hello, World!");');
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      // Capture console.log output
      let log = [];
      const originalConsoleLog = console.log;
      console.log = (...args) => log.push(args.join(" "));

      eval(code); // Execute JavaScript

      console.log = originalConsoleLog; // Restore console.log
      setOutput(log.join("\n") || "No output");
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    // Live Code Editor
    <div className={styles.editorcontainer}>
      <h2>Live Code Editor</h2>

      {/* Read-Only Code Box */}
      <textarea
        className={styles.readonly}
        readOnly
        value={`function greet(name) {\n  return \`Hello, \${name}!\`;\n}\nconsole.log(greet('Milind'));`}
      />

      {/* Editable Code Box */}
      <textarea className={styles.codeinput} value={code} onChange={(e) => setCode(e.target.value)} />

      {/* Run Button */}
      <button onClick={runCode} className={styles.button}>Run Code</button>

      {/* Output Box */}
      <div className={styles.output}>
        <strong>Output:</strong>
        <pre>{output}</pre>
      </div>
    </div>
  );
}
