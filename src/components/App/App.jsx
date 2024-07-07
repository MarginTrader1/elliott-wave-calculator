import { useState, useEffect } from "react";

import css from "./App.module.css";

import Description from "../Description/Description";
import ImpulsDataTable from "../ImpulsDataTable/ImpulsDataTable";
import ImpulseTable from "../ImpulseTable/ImpulseTable";

const initialStateImpuls = {
   startWave1: 0,
   endWave1: 0,
   startWave3: 0,
   endWave3: 0,
   startWave5: 0,
};

//получаем данные с локал сторедж
const getLSData = () => {
   const wavesData = JSON.parse(localStorage.getItem("wavesImpuls"));
   return wavesData === null ? initialStateImpuls : wavesData; //проверяем данные в локал сторедж
};

function App() {
   const [impuls, setImpuls] = useState(getLSData);

   // функция добавления данных в стейт для импульса
   const add = (key, value) => {
      setImpuls((prevState) => {
         return { ...prevState, [key]: value };
      });
   };

   // функция сброса формы
   const resetWavesData = () => {
      setImpuls(initialStateImpuls);
   };

   // функция добавление данных в локал сторедж
   useEffect(() => {
      localStorage.setItem("wavesImpuls", JSON.stringify(impuls));
   }, [impuls]);

   const { startWave1, endWave1, startWave3, endWave3, startWave5 } = impuls;
   const wave1Lenght = endWave1 - startWave1;
   const wave3Lenght = endWave3 - startWave3;
   const wave13Lenght = endWave3 - startWave1;

   return (
      <section className={css.container}>
         <Description />
         <ImpulsDataTable
            resetWavesData={resetWavesData}
            add={add}
            startWave1={startWave1}
            endWave1={endWave1}
            startWave3={startWave3}
            endWave3={endWave3}
            startWave5={startWave5}
            wave1Lenght={wave1Lenght}
            wave3Lenght={wave3Lenght}
            wave13Lenght={wave13Lenght}
         />
         <ImpulseTable />
      </section>
   );
}

export default App;
