import css from "./Wave3data.module.css";

const Wave3data = ({
   height0618,
   height1,
   height1618,
   height2618,
   height4236,
}) => {
   return (
      <div className={css.waveData}>
         <h3>Высота роста</h3>
         <h4>Для зигзага</h4>
         <div className={css.list}>
            <p className={css.content}>
               <span>{"0,618"}</span> <span>{height0618}</span>
            </p>
            <p className={css.content}>
               <span>{"1"}</span> <span>{height1}</span>
            </p>
         </div>
         <h4>Для 3 волны</h4>
         <div className={css.list}>
            <p className={css.content}>
               <span>{"1,618"}</span> <span>{height1618}</span>
            </p>
            <p className={css.content}>
               <span>{"2,618"}</span> <span>{height2618}</span>
            </p>
            <p className={css.content}>
               <span>{"4,236"}</span> <span>{height4236}</span>
            </p>
         </div>
      </div>
   );
};

export default Wave3data;
