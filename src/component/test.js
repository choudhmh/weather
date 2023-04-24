
import React, { useEffect, useState, Select } from "react";

export default function Test() {
  const algorithm = [
    {
      value: "Algorithm",
      label: "Algorithm"
    },
    {
      value: "Language",
      label: "Language"
    },
    {
      value: "Data Structure",
      label: "Data Structure"
    }
  ];

  const testing = [
    {
      value: "1",
      label: "1"
    },
    {
      value: "2",
      label: "2"
    },
    {
      value: "3",
      label: "3"
    }
  ];
  const language = [
    {
      value: "C++",
      label: "C++"
    },
    {
      value: "java",
      label: "java"
    },
    {
      value: "Python",
      label: "Python"
    },
    {
      value: "C#",
      label: "C#"
    }
  ];
  const dataStructure = [
    {
      value: "Arrays",
      label: "Arrays"
    },
    {
      value: "LinkedList",
      label: "LinkedList"
    },
    {
      value: "Stack",
      label: "Stack"
    },
    {
      value: "Queue",
      label: "Queue"
    }
  ];

  const [selected, setSelected] = useState("");

  let type = null;

  if (selected === "Algorithm") {
    type = testing;
  } else if (selected === "Language") {
    type = language;
  } else if (selected === "Data Structure") {
    type = dataStructure;
  }

  const changeSelectOptionHandler = (event) => {
    setSelected(event.value);
  };

  return (
    <div>
      <div>
        <Select
          options={algorithm}
          onChange={changeSelectOptionHandler}
        ></Select>
        <Select options={type}></Select>
      </div>
      <div>
        <Select
          options={algorithm}
          onChange={changeSelectOptionHandler}
        ></Select>
        <Select options={type}></Select>
      </div>
    </div>
  );
}

