import css from "./CorrectionTable.module.css";

const CorrectionTable = ({ waveCheight0618, waveCheight1, waveCheight1618, waveCheight2618 }) => {
   return (
      <div className={css.waveData}>
         <h3 className={css.title}>Конец для волны С</h3>
         <div className={css.list}>
            <p className={css.content}>
               <span>{"0,618"}</span> <span>{waveCheight0618}</span>
            </p>
            <p className={css.content}>
               <span>{"1"}</span> <span>{waveCheight1}</span>
            </p>
            <p className={css.content}>
               <span>{"1,618"}</span> <span>{waveCheight1618}</span>
            </p>
            <p className={css.content}>
               <span>{"2,618"}</span> <span>{waveCheight2618}</span>
            </p>
         </div>
      </div>
   );
};

export default CorrectionTable;
