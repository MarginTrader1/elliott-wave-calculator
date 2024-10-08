import { useState, useEffect } from "react";

import css from "./App.module.css";

import Description from "../Description/Description";
import ImpulsDataTable from "../ImpulsDataTable/ImpulsDataTable";
import ImpulseTable from "../ImpulseTable/ImpulseTable";
import CorrectionDataTable from "../CorrectionDataTable/CorrectionDataTable";
import CorrectionTable from "../CorrectionTable/CorrectionTable";
import Signature from "../Signature/Signature";

const initialStateImpuls = {
   startWave1: 0,
   endWave1: 0,
   startWave3: 0,
   endWave3: 0,
   startWave5: 0,
};

const initialStateCorrection = {
   startWaveA: 0,
   endWaveA: 0,
   endWaveB: 0,
};

//получаем данные с локал сторедж
const getLSData = () => {
   const wavesData = JSON.parse(localStorage.getItem("wavesImpuls"));
   return wavesData === null ? initialStateImpuls : wavesData; //проверяем данные в локал сторедж
};

//получаем данные с локал сторедж
const getLSDataCorrection = () => {
   const wavesData = JSON.parse(localStorage.getItem("wavesCorrection"));
   return wavesData === null ? initialStateCorrection : wavesData; //проверяем данные в локал сторедж
};

function App() {
   const [impuls, setImpuls] = useState(getLSData);
   const [correction, setCorrection] = useState(getLSDataCorrection);

   // функция добавления данных в стейт для импульса
   const add = (key, value) => {
      setImpuls((prevState) => {
         return { ...prevState, [key]: Number(value) };
      });
   };

   // функция добавления данных в стейт для импульса
   const addCrn = (key, value) => {
      setCorrection((prevState) => {
         return { ...prevState, [key]: Number(value) };
      });
   };

   // функция сброса формы
   const resetWavesData = () => {
      setImpuls(initialStateImpuls);
   };

   // функция сброса формы
   const resetWavesDataCrn = () => {
      setCorrection(initialStateCorrection);
   };

   // функция добавление данных в локал сторедж
   useEffect(() => {
      localStorage.setItem("wavesImpuls", JSON.stringify(impuls));
   }, [impuls]);

   // функция добавление данных в локал сторедж
   useEffect(() => {
      localStorage.setItem("wavesCorrection", JSON.stringify(correction));
   }, [correction]);

   // обработка данных для импульса
   const { startWave1, endWave1, startWave3, endWave3, startWave5 } = impuls;
   const wave1Lenght = endWave1 - startWave1;

   const wave3Lenght = endWave3 - startWave3;
   const wave13Lenght = endWave3 - startWave1;

   const correction0382 = Math.round(endWave1 - wave1Lenght * 0.382);
   const correction05 = Math.round(endWave1 - wave1Lenght * 0.5);
   const correction0618 = Math.round(endWave1 - wave1Lenght * 0.618);

   const height0618 = Math.round(startWave3 + wave1Lenght * 0.618);
   const height1 = Math.round(startWave3 + wave1Lenght);
   const height1618 = Math.round(startWave3 + wave1Lenght * 1.618);
   const height2618 = Math.round(startWave3 + wave1Lenght * 2.618);
   const height4236 = Math.round(startWave3 + wave1Lenght * 4.236);

   const wave4correction0786 = Math.round(endWave3 - wave13Lenght * 0.214);
   const wave4correction0618 = Math.round(endWave3 - wave13Lenght * 0.382);
   const wave4correction05 = Math.round(endWave3 - wave13Lenght * 0.5);

   const wave5height1 = Math.round(startWave5 + wave1Lenght);
   const wave5height0382impuls = Math.round(startWave5 + (startWave5 - startWave1) * 0.618);
   const wave5height1618 = Math.round(startWave5 + wave1Lenght * 1.618);
   const wave5height0618impuls = Math.round(startWave5 + (startWave5 - startWave1) / 0.618);
   const wave5height1618W1W3 = Math.round(startWave5 + wave13Lenght * 1.618);
   const wave5height2618W1W3 = Math.round(startWave5 + wave13Lenght * 2.618);

   // обработка данных для коррекций
   const { startWaveA, endWaveA, endWaveB } = correction;

   const waveALenght = Math.round(startWaveA - endWaveA);
   const waveBLenght = Math.round(endWaveB - endWaveA);

   const waveCheight0618 = Math.round(endWaveB - waveALenght * 0.618);
   const waveCheight1 = Math.round(endWaveB - waveALenght * 1);
   const waveCheight1618 = Math.round(endWaveB - waveALenght * 1.618);
   const waveCheight2618 = Math.round(endWaveB - waveALenght * 2.618);

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
         <ImpulseTable
            correction0382={correction0382}
            correction05={correction05}
            correction0618={correction0618}
            height0618={height0618}
            height1={height1}
            height1618={height1618}
            height2618={height2618}
            height4236={height4236}
            wave4correction0786={wave4correction0786}
            wave4correction0618={wave4correction0618}
            wave4correction05={wave4correction05}
            wave5height1={wave5height1}
            wave5height0382impuls={wave5height0382impuls}
            wave5height1618={wave5height1618}
            wave5height0618impuls={wave5height0618impuls}
            wave5height1618W1W3={wave5height1618W1W3}
            wave5height2618W1W3={wave5height2618W1W3}
         />
         <div className={css.correctionList}>
            <CorrectionDataTable
               addCrn={addCrn}
               resetWavesDataCrn={resetWavesDataCrn}
               startWaveA={startWaveA}
               endWaveA={endWaveA}
               waveALenght={waveALenght}
               endWaveB={endWaveB}
               waveBLenght={waveBLenght}
            />
            <CorrectionTable
               waveCheight0618={waveCheight0618}
               waveCheight1={waveCheight1}
               waveCheight1618={waveCheight1618}
               waveCheight2618={waveCheight2618}
            />
         </div>
         <Signature />
      </section>
   );
}

export default App;
