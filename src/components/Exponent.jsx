const Exponent = ({num, exponent}) => {

    function toExponentialChar(num) {
      const superscriptMap = {
          '0': '⁰',
          '1': '¹',
          '2': '²',
          '3': '³',
          '4': '⁴',
          '5': '⁵',
          '6': '⁶',
          '7': '⁷',
          '8': '⁸',
          '9': '⁹'
      };
  
      return num.toString().split('').map(digit => superscriptMap[digit] || digit).join('');
    }
  
    function createOperation ()
    {
      let output = '';
    
      for(let i = 0; i < exponent; i++)
      {
        output += `${num} * `;
      }
  
      return output.slice(0, -3);
    }
    
    return (
      <div className="exponent-counter-container">
      <p className="exponent-label">{num}{toExponentialChar(exponent)}</p>
      <p className="exponent-result"> {createOperation()} = <span className="total">{num**exponent }</span></p>
    </div>
    );  
  };
  
  export default Exponent;