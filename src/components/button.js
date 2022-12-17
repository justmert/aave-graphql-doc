import "./../css/button.css";
import React from "react";
import CodeBlock from "@theme/CodeBlock";
import { Link } from 'react-router-dom';

export default function CodeBlockv2(props) {
  return (
    <div style={{ marginBottom: "4.0em" }}>
      <p style={{ marginBottom: "0.6em" }}>{props.text}</p>
      <CodeBlock
        language="graphql"
        title=<span><a target="_blank" style={{textDecoration: 'none'}} href={props.link}>
          <input type="submit" value="Try me live!" class="buttonDark buttonLight" />
        </a>
          <span style={{ paddingLeft: 1 + "em" }}> {props.subtitle} </span>
          </span>
        showLineNumbers
      >
      {props.code}
      </CodeBlock>
    </div>
  );
}
