import css from "./Wave4data.module.css";

const Wave4data = ({
   wave4correction0786,
   wave4correction0618,
   wave4correction05,
}) => {
   return (
      <div className={css.waveData}>
         <h3 className={css.title}>Коррекция для 4 волны</h3>
         <div className={css.list}>
            <p className={css.content}>
               <span>{"0,786"}</span>
               <span>{wave4correction0786}</span>
            </p>
            <p className={css.content}>
               <span>{"0,618"}</span>
               <span>{wave4correction0618}</span>
            </p>
            <p className={css.content}>
               <span>{"0,5"}</span>
               <span>{wave4correction05}</span>
            </p>
         </div>
      </div>
   );
};

export default Wave4data;
