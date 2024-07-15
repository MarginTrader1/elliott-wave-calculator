import Wave2data from "../Wave2data/Wave2data";
import Wave3data from "../Wave3data/Wave3data";
import Wave4data from "../Wave4data/Wave4data";
import Wave5data from "../Wave5data/Wave5data";

import css from "./ImpulsTable.module.css";

const ImpulseTable = ({
   correction0382,
   correction05,
   correction0618,
   height0618,
   height1,
   height1618,
   height2618,
   height4236,
   wave4correction0786,
   wave4correction0618,
   wave4correction05,
   wave5height1,
   wave5height0382impuls,
   wave5height1618,
   wave5height0618impuls,
   wave5height1618W1W3,
   wave5height2618W1W3,
}) => {
   return (
      <>
         <section className={css.list}>
            <Wave2data
               correction0382={correction0382}
               correction05={correction05}
               correction0618={correction0618}
            />
            <Wave3data
               height0618={height0618}
               height1={height1}
               height1618={height1618}
               height2618={height2618}
               height4236={height4236}
            />
            <Wave4data
               wave4correction0786={wave4correction0786}
               wave4correction0618={wave4correction0618}
               wave4correction05={wave4correction05}
            />
            <Wave5data
               wave5height1={wave5height1}
               wave5height0382impuls={wave5height0382impuls}
               wave5height1618={wave5height1618}
               wave5height0618impuls={wave5height0618impuls}
               wave5height1618W1W3={wave5height1618W1W3}
               wave5height2618W1W3={wave5height2618W1W3}
            />
         </section>
      </>
   );
};

export default ImpulseTable;
