import {
  calculateCurrentCaffeineLevel,
  coffeeConsumptionHistory,
  getCaffeineAmount,
  timeSinceConsumption,
} from "../utils";

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
            // history hover effect
            const coffee = coffeeConsumptionHistory[utcTime];
            const timeSinceConsume = timeSinceConsumption(utcTime);
            const originalAmount = getCaffeineAmount(coffee.name);
            const remainingAmount = calculateCurrentCaffeineLevel({
              [utcTime]: coffee,
            });
            const summary = `${coffee.name} | ${timeSinceConsume} | ${coffee.cost} | ${originalAmount}mg / ${remainingAmount}mg`;

            return (
              <div key={coffeeIndex} title={summary}>
                <i className="fa-solid fa-mug-hot"></i>
              </div>
            );
          })}
      </div>
    </>
  );
}
