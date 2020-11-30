export const tripPriceTemplate = (data) => {
  let Totalprice = 0;
  data.map((el) => Totalprice += el.price);
  return `<p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${Totalprice}</span>
            </p>`;
};
