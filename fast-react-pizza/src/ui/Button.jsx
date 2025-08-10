import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-full bg-yellow-500 px-4 py-3 font-semibold tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    round: base + " px-2 py-1.5 md:px-3 md:py-2.5",
    secondary:
      "inline-block rounded-full border-2 border-stone-300 font-semibold bg-transparent border-stone-300 px-4 py-3 font-semibold tracking-wide text-stone-300 transition-colors duration-300 hover:bg-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4 px-4 px-2 focus:text-stone-800",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
export default Button;
