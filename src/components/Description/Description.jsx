import css from "./Description.module.css";

const Description = () => {
   return (
      <div className={css.data}>
         <h1 className={css.title}>{"Elliott Waves Calculator"}</h1>
         <p>{"Укажите начальные значения волн в табличке"}</p>
      </div>
   );
};

export default Description;
