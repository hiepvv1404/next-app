export const debounce = <T extends unknown[]>( // khi nhập search: ví dụ nhập abc xong nghỉ thì append abc chư ko append từng kí tự
  callback: (...args: T) => void,
  delay: number = 500,
) => {
  let timeout: NodeJS.Timeout | number;

  return (...args: T) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
