import css from "./ImpulsDataTable.module.css";

const ImpulsDataTable = () => {
   return (
      <>
         <table className={css.table}>
            <thead>
               <tr>
                  <th className={css.title}>Исходные значения согласно графика</th>
               </tr>
            </thead>
            <tbody className={css.dataList}>
               <tr className={css.wave}>
                  <td>
                     <label htmlFor={`startWave1`}>Начало роста 1 волны</label>
                  </td>
                  <td>
                     <input type="text" id={`startWave1`} onChange={1} />
                  </td>
               </tr>
               <tr className={css.wave}>
                  <td>
                     <label htmlFor={`endWave1`}>Конец роста 1 волны</label>
                  </td>
                  <td>
                     <input type="text" id={`endWave1`} onChange={1} />
                  </td>
               </tr>

               <tr className={css.wave}>
                  <td>
                     <label htmlFor={`startWave3`}>Начало роста 1 волны</label>
                  </td>
                  <td>
                     <input type="text" id={`startWave3`} onChange={1} />
                  </td>
               </tr>
               <tr className={css.wave}>
                  <td>
                     <label htmlFor={`endWave3`}>Конец роста 1 волны</label>
                  </td>
                  <td>
                     <input type="text" id={`endWave3`} onChange={1} />
                  </td>
               </tr>
               <tr className={css.wave}>
                  <td>
                     <p>Длина 3 волны</p>
                  </td>
                  <td>
                     <p>Длина 3 волны</p>
                  </td>
               </tr>
               <tr className={css.wave}>
                  <td>
                     <p>Общая длина 1 и 3 волн</p>
                  </td>
                  <td>
                     <p>Длина 1 + 3</p>
                  </td>
               </tr>
               <tr className={css.wave}>
                  <td>
                     <label htmlFor={`startWave5`}>Начало роста 1 волны</label>
                  </td>
                  <td>
                     <input type="text" id={`startWave5`} onChange={1} />
                  </td>
               </tr>
            </tbody>
         </table>
      </>
   );
};

export default ImpulsDataTable;
