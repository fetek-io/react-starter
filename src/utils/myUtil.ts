export const formatNumberCurrency = (value: string) =>
  !Number.isNaN(parseFloat(value)) ? `${value} đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 'đ ';
