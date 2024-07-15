import css from "./Signature.module.css";

const Signature = () => {
   return (
      <div className={css.signature}>
         <h4>
            Created by{" "}
            <a href="https://t.me/crypto_big_boss" target="_blank">
               Margin Trader
            </a>
         </h4>
         <p>
            для канала{" "}
            <a href="https://t.me/crypto_puzzle" target="_blank">
               "Биткоин, волновой и технический анализ!"
            </a>
         </p>
      </div>
   );
};

export default Signature;
