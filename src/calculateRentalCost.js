/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCost = days * 40;
  let totatDiscount = 0;

  if (days >= 3 && days < 7) {
    totatDiscount = 20;
  }

  if (days >= 7) {
    totatDiscount = 50;
  }

  return totalCost - totatDiscount;
}

module.exports = calculateRentalCost;
