import { useState } from "react";
import { coffeeOptions } from "../utils/index";
export default function CoffeeForm() {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [showCoffeeTypes, setShowCoffeeTypes] = useState(false);
  const [coffeeCost, setCoffeeCost] = useState(0);
  const [hourInput, setHourInput] = useState(0);
  const [minuteInput, setMinuteInput] = useState(0);

  function handleSubmit() {
    console.log(selectedCoffee, coffeeCost, hourInput, minuteInput);
  }

  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-pencil"></i>
        <h2>Start Tracking Today</h2>
      </div>
      <h4>Select Coffee Type</h4>
      <div className="coffee-grid">
        {coffeeOptions.slice(0, 5).map((option, optionIndex) => {
          return (
            <button
              className={
                "button-card " +
                (option.name === selectedCoffee ? "coffee-button-selected" : "")
              }
              key={optionIndex}
              onClick={() => {
                setSelectedCoffee(option.name);
                setShowCoffeeTypes(false);
              }}
            >
              <h4>{option.name}</h4>
              <p>{option.caffeine} mg</p>
            </button>
          );
        })}
        <button
          className={
            "button-card " + (showCoffeeTypes ? "coffee-button-selected" : "")
          }
          onClick={() => {
            setShowCoffeeTypes(true);
            setSelectedCoffee(null);
          }}
        >
          <h4>Other</h4>
          <p>n/a</p>
        </button>
      </div>
      {showCoffeeTypes && (
        <select
          name="coffee-list"
          id="coffee-list"
          onChange={(event) => {
            setSelectedCoffee(event.target.value);
          }}
        >
          <option value={null}>Select type</option>
          {coffeeOptions.map((option, optionIndex) => {
            return (
              <option value={option.name} key={optionIndex}>
                {option.name} ({option.caffeine}mg)
              </option>
            );
          })}
        </select>
      )}
      <h4>Add the cost ($)</h4>
      <input
        type="number"
        className="w-full"
        placeholder="e.g. 4.50"
        min="0"
        value={coffeeCost}
        onChange={(event) => {
          setCoffeeCost(event.target.value);
        }}
      />
      <h4>Time since consumption</h4>
      <div className="time-entry">
        <div>
          <h6>Hours</h6>
          <select
            name="hours-select"
            id="hours-select"
            value={hourInput}
            onChange={(e) => {
              setHourInput(e.target.value);
            }}
          >
            {[
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23,
            ].map((hour, hourIndex) => {
              return (
                <option key={hourIndex} value={hour}>
                  {hour}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <h6>Minutes</h6>
          <select
            name="mins-select"
            id="mins-select"
            value={minuteInput}
            onChange={(e) => {
              setMinuteInput(e.target.value);
            }}
          >
            {[
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
              35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
              51, 52, 53, 54, 55, 56, 57, 58, 59,
            ].map((min, minIndex) => {
              return (
                <option key={minIndex} value={min}>
                  {min}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <button onClick={handleSubmit}>
        <p>Add Entry</p>
      </button>
    </>
  );
}
