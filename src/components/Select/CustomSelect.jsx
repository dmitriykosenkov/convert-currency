import React from "react";
import useOutsideClick from "./hooks/useOutsideClick";
import "./styles.css";
import s from "./CustomSelect.module.css";
// import { ErrorMessage } from "../../components/ErrorMessage";

const CustomSelect = ({ options, name, value, setValue, title, error, submit }) => {
  const [isOpen, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(value);
  const selectRef = React.useRef(null);
  useOutsideClick(selectRef, () => {
    setOpen(false);
  });
  React.useEffect(() => {
    if (selected) {
      setValue(name, selected);
    }
  }, [selected, setValue]);
  React.useEffect(() => {
   setSelected(value)
  }, [submit])
  return (
    <div >
       <div
         ref={selectRef}
         onClick={() => {
           setOpen((prev) => !prev);
         }}
         className={s.wrapper}
       >
         <div className={`custom-select ${isOpen && "open"}`}>
           <div className={s.title}>
             <span>
               {options.find((item) => item === selected) || title}
             </span>
           </div>
           <div className="custom-options">
             {options.map((item) => {
               return (
                 <div
                   onClick={() => setSelected(item)}
                   className={s.listItem}
                 >
                   {item}
                 </div>
               );
             })}
           </div>
         </div>
       </div>
       {/* {error && !selected && <ErrorMessage errorMessage={error.message}/>} */}
    </div>
  );
};
export default CustomSelect;
