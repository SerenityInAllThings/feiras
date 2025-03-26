import { useState } from "preact/hooks"
import { feiras, Feira } from "./feiras"

export function App() {
  const [day, setDay] = useState(new Date().getDay())
  const initialFeira = feiras.find(feira => feira.weekday === day)
  const [feira, setFeira] = useState(initialFeira)

  return (
    <div className='w-screen h-screen flex flex-row'>
      <div className="w-[850px] h-full">
        <div className="h-[650px] w-full bg-amber-50">
          {feira && <FeiraDisplay feira={feira} />}
        </div>
        <div className="h-[calc(100%-650px)] w-full bg-amber-100">
          something
        </div>
      </div>
      <div className="w-full h-full bg-amber-100">
        <FeirasSelector feiras={feiras} onFeiraChange={setFeira} />
      </div>
    </div>
  )
}

const FeiraDisplay = ({ feira }: { feira: Feira }) => {
  return (
    <div className="w-full h-full flex flex-col p-2">
      <h2 className="font-bold text-xl">{feira.name}</h2>
      <div
        className="p-2"
        dangerouslySetInnerHTML={{ __html: feira.mapsUrl }} 
      />
    </div>
  )
}

const FeirasSelector = ({ feiras, onFeiraChange }: { feiras: Feira[], onFeiraChange: (feira: Feira) => void }) => {
  return (
    <div className="w-full flex flex-col">
      {feiras.map(feira => (
        <FeiraSelectorItem key={feira.name} feira={feira} onSelect={() => onFeiraChange(feira)} />
      ))}
    </div>
  )
}

const FeiraSelectorItem = ({ feira, onSelect }: { feira: Feira, onSelect: () => void }) => {
  return (
    <div className="p-2">
      <button onMouseDown={onSelect}>{feira.name}</button>
    </div>
  )
}