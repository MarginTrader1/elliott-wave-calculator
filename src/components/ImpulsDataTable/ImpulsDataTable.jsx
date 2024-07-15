import css from "./ImpulsDataTable.module.css";
import { useState } from "react";

import { Formik, Form } from "formik";

const ImpulsDataTable = ({
   startWave1,
   endWave1,
   startWave3,
   endWave3,
   startWave5,
   wave1Lenght,
   wave3Lenght,
   wave13Lenght,
   resetWavesData,
   add,
}) => {
   const initialValues = {
      startWave1: "",
      endWave1: "",
      startWave3: "",
      endWave3: "",
      startWave5: "",
   };

   const [showInput1, setShowInput1] = useState(false);
   const [showInput2, setShowInput2] = useState(false);
   const [showInput3, setShowInput3] = useState(false);
   const [showInput4, setShowInput4] = useState(false);
   const [showInput5, setShowInput5] = useState(false);

   return (
      <Formik initialValues={initialValues}>
         <Form className={css.dataList} autoComplete="off">
            <div
               className={css.wave}
               onMouseEnter={() => setShowInput1(true)}
               onMouseLeave={() => setShowInput1(false)}
            >
               <label htmlFor={`startWave1`}>Начало роста 1 волны</label>
               {showInput1 ? (
                  <input
                     name="startWave1"
                     type="text"
                     id={`startWave1`}
                     autoFocus
                     placeholder={`${startWave1}`}
                     className={css.waveInput}
                     onChange={(evt) => {
                        evt.preventDefault();
                        add(evt.target.name, evt.target.value);
                     }}
                  />
               ) : (
                  <p>{startWave1}</p>
               )}
            </div>
            <div
               className={css.wave}
               onMouseEnter={() => setShowInput2(true)}
               onMouseLeave={() => setShowInput2(false)}
            >
               <label htmlFor={`endWave1`}>Конец роста 1 волны</label>
               {showInput2 ? (
                  <input
                     name="endWave1"
                     type="text"
                     id={`endWave1`}
                     autoFocus
                     placeholder={`${endWave1}`}
                     className={css.waveInput}
                     onChange={(evt) => {
                        evt.preventDefault();
                        add(evt.target.name, evt.target.value);
                     }}
                  />
               ) : (
                  <p>{endWave1}</p>
               )}
            </div>
            <div className={css.waveText}>
               <p>Длина 1 волны</p>
               <p>{wave1Lenght}</p>
            </div>
            <div
               className={css.wave}
               onMouseEnter={() => setShowInput3(true)}
               onMouseLeave={() => setShowInput3(false)}
            >
               <label htmlFor={`startWave3`}>Начало роста 3 волны</label>
               {showInput3 ? (
                  <input
                     name="startWave3"
                     type="text"
                     id={`startWave3`}
                     autoFocus
                     placeholder={`${startWave3}`}
                     className={css.waveInput}
                     onChange={(evt) => {
                        evt.preventDefault();
                        add(evt.target.name, evt.target.value);
                     }}
                  />
               ) : (
                  <p>{startWave3}</p>
               )}
            </div>
            <div
               className={css.wave}
               onMouseEnter={() => setShowInput4(true)}
               onMouseLeave={() => setShowInput4(false)}
            >
               <label htmlFor={`endWave3`}>Конец роста 3 волны</label>
               {showInput4 ? (
                  <input
                     name="endWave3"
                     type="text"
                     id={`endWave3`}
                     autoFocus
                     placeholder={`${endWave3}`}
                     className={css.waveInput}
                     onChange={(evt) => {
                        evt.preventDefault();
                        add(evt.target.name, evt.target.value);
                     }}
                  />
               ) : (
                  <p>{endWave3}</p>
               )}
            </div>
            <div className={css.waveText}>
               <p>Длина 3 волны</p>
               <p>{wave3Lenght}</p>
            </div>
            <div className={css.waveText}>
               <p>Общая длина 1 и 3 волн</p>
               <p>{wave13Lenght}</p>
            </div>
            <div
               className={css.wave}
               onMouseEnter={() => setShowInput5(true)}
               onMouseLeave={() => setShowInput5(false)}
            >
               <label htmlFor={`startWave5`}>Начало роста 5 волны</label>
               {showInput5 ? (
                  <input
                     name="startWave5"
                     type="text"
                     id={`startWave5`}
                     autoFocus
                     placeholder={`${startWave5}`}
                     className={css.waveInput}
                     onChange={(evt) => {
                        evt.preventDefault();
                        add(evt.target.name, evt.target.value);
                     }}
                  />
               ) : (
                  <p>{startWave5}</p>
               )}
            </div>
            <button
               type="button"
               className={css.button}
               onClick={resetWavesData}
            >
               Reset
            </button>
         </Form>
      </Formik>
   );
};

export default ImpulsDataTable;
