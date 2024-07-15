import css from "./Wave2data.module.css";

const Wave2data = ({ correction0382, correction05, correction0618 }) => {
   return (
      <div className={css.waveData}>
         <h3 className={css.title}>Коррекция для 2 волны</h3>
         <div className={css.list}>
            <p className={css.content}>
               <span>{"0,382"}</span>
               <span>{correction0382}</span>
            </p>
            <p className={css.content}>
               <span>{"0,5"}</span>
               <span>{correction05}</span>
            </p>
            <p className={css.content}>
               <span>{"0,618"}</span>
               <span>{correction0618}</span>
            </p>
         </div>
      </div>
   );
};

export default Wave2data;
