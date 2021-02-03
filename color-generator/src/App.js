
import { useState } from 'react';
import Values from 'values.js'
import Color from './Color';
function App() {

  const [value, setValue] = useState()
  const [list, setList] = useState(new Values('#f15025').all(10))
  const [error, setError] = useState(false)
  const handleSubmit = () => {
    ;
    try {
      let colors = new Values(value).all(10)
      setList(colors)
      setError(false)
    } catch (error) {
      setError(true)
      setList([])
    }
  }
  return (
    <div className="App">
      <input type="text"
        placeholder="#f15025"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={error ? 'error' : ''}
      />
      <button
        className='btn'
        type='submit'
        onClick={() => handleSubmit()}
      >
        submit
        </button>
      <div className="list">
        {
          list.map((item, index) => {
            return (
              <Color
                key={index}
                index={index}
                {...item}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
