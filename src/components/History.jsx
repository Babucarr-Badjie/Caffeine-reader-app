import { coffeeConsumptionHistory } from "../utils";

export default function History() {
  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-timeline" />
        <h2>History</h2>
      </div>
      <p>
        <i>Hover for more information</i>
      </p>
      <div className="coffee-history">
        {Object.keys(coffeeConsumptionHistory)
          .sort((a, b) => b - a)
          .map((utcTime, coffeeIndex) => {
            return (
              <div key={coffeeIndex}>
                <i className="fa-solid fa-mug-hot"></i>
              </div>
            );
          })}
      </div>
    </>
  );
}
