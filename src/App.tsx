import { Button } from 'antd'
import { useQuery } from '@tanstack/react-query'
import { useCounterStore } from './store/useCounterStore'

function App() {
  const { count, increment, decrement } = useCounterStore()

  const { data, isLoading } = useQuery({
    queryKey: ['example'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()),
  })

  return (
    <div style={{ padding: 24 }}>
      <h1>🧠 Zustand + TanStack + AntD</h1>

      <div style={{ margin: '16px 0' }}>
        <Button onClick={decrement}>-</Button>
        <span style={{ margin: '0 8px' }}>{count}</span>
        <Button type="primary" onClick={increment}>+</Button>
      </div>

      <div>
        {isLoading ? (
          <p>Loading data...</p>
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>
    </div>
  )
}

export default App
