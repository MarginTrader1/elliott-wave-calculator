import css from "./CorrectionDataTable.module.css";

import { useState } from "react";

import { Formik, Form } from "formik";

const CorrectionDataTable = ({
   addCrn,
   resetWavesDataCrn,
   startWaveA,
   endWaveA,
   waveALenght,
   endWaveB,
   waveBLenght,
}) => {
   const initialValues = {
      startWaveA: 0,
      endWaveA: 0,
      endWaveB: 0,
   };

   const [showInput1, setShowInput1] = useState(false);
   const [showInput2, setShowInput2] = useState(false);
   const [showInput3, setShowInput3] = useState(false);

   return (
      <Formik initialValues={initialValues}>
         <Form className={css.dataList} autoComplete="off">
            <div
               className={css.wave}
               onMouseEnter={() => setShowInput1(true)}
               onMouseLeave={() => setShowInput1(false)}
            >
               <label htmlFor={`startWaveA`}>Начало роста волны A</label>
               {showInput1 ? (
                  <input
                     name="startWaveA"
                     type="text"
                     id={`startWaveA`}
                     autoFocus
                     placeholder={`${startWaveA}`}
                     className={css.waveInput}
                     onChange={(evt) => {
                        evt.preventDefault();
                        addCrn(evt.target.name, evt.target.value);
                     }}
                  />
               ) : (
                  <p>{startWaveA}</p>
               )}
            </div>
            <div
               className={css.wave}
               onMouseEnter={() => setShowInput2(true)}
               onMouseLeave={() => setShowInput2(false)}
            >
               <label htmlFor={`endWaveA`}>Конец роста волны А</label>
               {showInput2 ? (
                  <input
                     name="endWaveA"
                     type="text"
                     id={`endWaveA`}
                     autoFocus
                     placeholder={`${endWaveA}`}
                     className={css.waveInput}
                     onChange={(evt) => {
                        evt.preventDefault();
                        addCrn(evt.target.name, evt.target.value);
                     }}
                  />
               ) : (
                  <p>{endWaveA}</p>
               )}
            </div>
            <div className={css.waveText}>
               <p>Длина волны A</p>
               <p>{waveALenght}</p>
            </div>
            <div className={css.waveText}>
               <p>Начало роста волны B</p>
               <p>{endWaveA}</p>
            </div>
            <div
               className={css.wave}
               onMouseEnter={() => setShowInput3(true)}
               onMouseLeave={() => setShowInput3(false)}
            >
               <label htmlFor={`endWaveB`}>Конец роста волны B</label>
               {showInput3 ? (
                  <input
                     name="endWaveB"
                     type="text"
                     id={`endWaveB`}
                     autoFocus
                     placeholder={`${endWaveB}`}
                     className={css.waveInput}
                     onChange={(evt) => {
                        evt.preventDefault();
                        addCrn(evt.target.name, evt.target.value);
                     }}
                  />
               ) : (
                  <p>{endWaveB}</p>
               )}
            </div>
            <div className={css.waveText}>
               <p>Длина волны B</p>
               <p>{waveBLenght}</p>
            </div>
            <div className={css.waveText}>
               <p>Начало роста волны С</p>
               <p>{endWaveB}</p>
            </div>

            <button type="button" className={css.button} onClick={resetWavesDataCrn}>
               Reset
            </button>
         </Form>
      </Formik>
   );
};

export default CorrectionDataTable;