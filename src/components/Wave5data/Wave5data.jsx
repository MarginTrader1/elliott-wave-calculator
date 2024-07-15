import css from "./Wave5data.module.css";

const Wave5data = ({
   wave5height1,
   wave5height0382impuls,
   wave5height1618,
   wave5height0618impuls,
   wave5height1618W1W3,
   wave5height2618W1W3,
}) => {
   return (
      <div className={css.waveData}>
         <h3 className={css.title}>Высота роста для 5 волны</h3>
         <div className={css.list}>
            <p className={css.content}>
               <span>{"5 = 1"}</span>
               <span>{wave5height1}</span>
            </p>
            <p className={css.content}>
               <span>{"5 = 0.382 всего импульса"}</span>
               <span>{wave5height0382impuls}</span>
            </p>
            <p className={css.content}>
               <span>{"5 = 1 волна * 1,618"}</span>
               <span>{wave5height1618}</span>
            </p>
            <p className={css.content}>
               <span>{"5 = 0.618 всего импульса"}</span>
               <span>{wave5height0618impuls}</span>
            </p>
            <p className={css.content}>
               <span>{"5 = 1,618 * (1+3)"}</span>
               <span>{wave5height1618W1W3}</span>
            </p>
            <p className={css.content}>
               <span>{"5 = 2,618 * (1+3)"}</span>
               <span>{wave5height2618W1W3}</span>
            </p>
         </div>
      </div>
   );
};

export default Wave5data;
