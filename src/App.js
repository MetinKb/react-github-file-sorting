import { useState } from "react"

function App() {
  const [fileNames, setFileNames] = useState(["App", "Controllers", "api", ""])
  const fileName = fileNames.at(-1)
  const folderName = fileNames.slice(0, -1).filter(Boolean)

  const changeHandle = e => {
    if (e.target.value.includes('/')) {
      setFileNames(names => [
        ...names,
        ''
      ])
    } else {
      setFileNames(names => [
        ...names.slice(0, -1),
        e.target.value
      ])
    }
  }

  const keyDownHandle = e => {
    if (e.key === 'Backspace' && !e.target.value) {
      e.preventDefault()
      setFileNames(names => names.slice(0, -1))
    } else if (e.key === 'Enter') {
      setFileNames(names => [
        ...names,
        ''
      ])
    }
  }

  return (
    <div className="p-4 container mx-auto">
      <h3 className="text-white">Github File Sorting</h3>
      < nav className="flex items-center gap-3 flex-wrap" >
        {
          fileNames.slice(0, -1).map((name, index) => (
            <>
              <button key={index} className="text-blue-500 hover:underline">
                {name}
              </button>
              <span className="text-zinv-500 text-white">/</span>
            </>
          ))
        }
        < input
          onChange={changeHandle}
          onKeyDown={keyDownHandle}
          value={fileName}
          type="text"
          className="border border-zinc-700 rounded-md w-[200px] p-2 bg-transparent outline-none text-white"
        />
      </nav >
      <br /><br /><br />
      <pre className="text-white">
        {JSON.stringify(fileName, null, 2)}
      </pre>
      <pre className="text-white">
        {JSON.stringify(folderName, null, 2)}
      </pre>
    </div >
  )
}

export default App
