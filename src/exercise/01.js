// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const LazyGlobe = React.lazy(() => import(/* webpackPrefetch: true */ '../globe'));

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  const onChangeInput = e => {
    setShowGlobe(e.target.checked)
  }

  // 🐨 wrap the code below in a <React.Suspense /> component
  // with a fallback.
  // 💰 try putting it in a few different places and observe how that
  // impacts the user experience.
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <label style={{marginBottom: '1rem'}}>
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={onChangeInput}
        />
        {' show globe'}
      </label>
      <div style={{width: 400, height: 400}}>
        <React.Suspense fallback={<div>Loading...</div>}>
          {showGlobe ? <LazyGlobe /> : null}
        </React.Suspense>
      </div>
    </div>
  )
}

// 🦉 Note that if you're not on the isolated page, then you'll notice that this
// app actually already has a React.Suspense component higher up in the tree
// where this component is rendered, so you *could* just rely on that one.

export default App
