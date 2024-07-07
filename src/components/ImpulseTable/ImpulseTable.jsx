import css from "./ImpulsTable.module.css"

const ImpulseTable = () => {
   return (
      <table>
         <thead>
            <tr>
               <th colSpan="2">1</th>
               <th colSpan="2">2</th>
               <th colSpan="2">3</th>
               <th colSpan="2">4</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>0.382</td>
               <td>2</td>
               <td>3</td>
               <td>4</td>
               <td>5</td>
               <td>6</td>
               <td>7</td>
               <td>8</td>
            </tr>
            <tr>
               <td>0.5</td>
               <td>2</td>
               <td>3</td>
               <td>4</td>
               <td>5</td>
               <td>6</td>
               <td>7</td>
               <td>8</td>
            </tr>
            <tr>
               <td>0.618</td>
               <td>2</td>
               <td>3</td>
               <td>4</td>
               <td  colSpan="2">5</td>
               <td>7</td>
               <td>8</td>
            </tr>
            <tr>
               <td>1</td>
               <td>2</td>
               <td>3</td>
               <td>4</td>
               <td>5</td>
               <td>6</td>
               <td>7</td>
               <td>8</td>
            </tr>
            <tr>
               <td>1</td>
               <td>2</td>
               <td>3</td>
               <td>4</td>
               <td>5</td>
               <td>6</td>
               <td>7</td>
               <td>8</td>
            </tr>
            <tr>
               <td>1</td>
               <td>2</td>
               <td>3</td>
               <td>4</td>
               <td>5</td>
               <td>6</td>
               <td>7</td>
               <td>8</td>
            </tr>
         </tbody>
      </table>
   );
};

export default ImpulseTable;
