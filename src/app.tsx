import { useState } from "preact/hooks"
import { feiras, Feira } from "./feiras"

export function App() {
  const [day] = useState(new Date().getDay())
  const initialFeira = feiras.find(feira => feira.weekday === day)
  const [feira, setFeira] = useState(initialFeira)

  return (
    <div className='w-screen h-screen flex flex-col'>
      <div className='w-screen h-12 bg-rose flex  items-center'>
      <img className='w-8 h-8' src="./assets/menu.svg" alt="" />
      </div>
      <div className='w-screen h-40 bg-rose flex flex-col '>
        <div className='h-1/3'>Feira de São Francisco</div>
        <div className='h-1/3'>Endereço: R. DAVID CARNEIRO, S/N</div>
        <div className='h-1/3 flex flex-row'>
        <div className='w-1/2 flex justify-center'>a</div>
        <div className='w-1/2'>b</div>
        </div>
      </div>
      <div className='w-screen h-full bg-red'></div>
    </div>


/* --Tela das Feiras
    <div className='w-screen h-screen flex flex-col'>
      <div className='w-screen bg-rose h-12 flex flex-row'>
        <div className='w-20 h-12 bg-rose flex justify-center items-center'>
          <img className='w-8 h-8' src="./assets/menu.svg" alt="" />
        </div>
      </div>
      <div className='w-screen h-full '>
        {feiras.map((feiraAtual, index) => {
          return (
            <div className='w-screen h-21 flex flex-row' key={index}>
              <div className='w-20 h-full'></div>
              <div className='w-full h-full flex flex-col'>
              <div className='h-1/2'>{feiraAtual.name}</div>
              <div className='h-1/2 flex flex-row'>
              <div className='w-1/2 flex justify-start'>a</div>
              <div className='w-1/2 flex justify-start'>b</div>
              </div>
              </div>
            </div>
          )
        })}
      </div>
    </div> */

    /* --Tela Inicial
    <div className='w-screen h-screen flex flex-col bg-[url(./assets/feira.jpg)]'>
      <div className='w-screen bg-black h-12 flex flex-row'>
        <div className='w-20 h-12 bg-red flex justify-center items-center'>
          <img className='w-8 h-8' src="./assets/menu.svg" alt="" />
        </div>
        <div className='w-full h-12 bg-red text-4xl text-white text-center'>
          <h1>Minha Feira</h1>
        </div>
      </div>
 */

    /* Original
    
    <div className="w-[850px] h-full">
      <div className="h-[650px] w-full bg-amber-50">
        {feira ? <FeiraDisplay feira={feira} /> : <p>Nenhuma feira selecionada</p>}
      </div>
      <div className="h-[calc(100%-650px)] w-full bg-amber-100">
        {feira && <FeiraDetails feira={feira} />}
      </div>
    </div>
    <div className="w-full h-full bg-amber-100 pl-2">
      <FeirasSelector feiras={feiras} onFeiraChange={setFeira} />
    </div> */
    //</div>

  )
}

const FeiraDisplay = ({ feira }: { feira: Feira }) => {
  return (
    <div className="w-full h-full flex flex-col p-2">
      <h2 className="font-bold text-xl">{feira.name}</h2>
      <div
        id="feira-display"
        className="p-2"
        dangerouslySetInnerHTML={{ __html: feira.mapsUrl }}
      />
    </div>
  )
}

const getWeekdayName = (weekday: number) => {
  switch (weekday) {
    case 0: return 'Domingo'
    case 1: return 'Segunda'
    case 2: return 'Terça'
    case 3: return 'Quarta'
    case 4: return 'Quinta'
    case 5: return 'Sexta'
    case 6: return 'Sábado'
  }
}

const FeirasSelector = ({ feiras, onFeiraChange }: { feiras: Feira[], onFeiraChange: (feira: Feira) => void }) => {
  const feirasPerWeekday = feiras.reduce((acc, feira) => {
    const weekday = feira.weekday
    acc[weekday].push(feira)
    return acc
  }, { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] } as Record<number, Feira[]>)
  const weekNumbers = Object.keys(feirasPerWeekday).map(key => parseInt(key))

  return (
    <div className="w-full flex flex-col">
      {weekNumbers.map((weekday) => {
        return (
          <>
            <h3 className="text-lg font-bold">{getWeekdayName(weekday)}</h3>
            <div className="flex">
              {feirasPerWeekday[weekday].length === 0 ? (
                <div className="p-2">
                  <p>Não há feiras neste dia :c</p>
                </div>
              ) : (
                feirasPerWeekday[weekday].map((feira, index) => (
                  <FeiraSelectorItem
                    key={index}
                    feira={feira}
                    onSelect={() => onFeiraChange(feira)}
                  />
                ))
              )}
            </div>
          </>
        )
      })}
    </div>
  )
}

const FeiraSelectorItem = ({ feira, onSelect }: { feira: Feira, onSelect: () => void }) => {
  return (
    <div className="p-2">
      <button
        className="rounded-md bg-amber-300 p-1 pl-2 pr-2"
        onMouseDown={onSelect}
      >
        <p>{feira.name}</p>
        <p className="float-left">{feira.startTime} - {feira.endTime}</p>
      </button>
    </div>
  )
}

const FeiraDetails = ({ feira }: { feira: Feira }) => {
  return (
    <div className="w-full h-full flex flex-col p-2">
      <h2 className="font-bold text-lg">{feira.name}</h2>
      <p>Horário: {feira.startTime} - {feira.endTime}</p>
      <p>Endereço: {feira.address}</p>
      <button
        className="rounded-md bg-amber-300 p-1 pl-2 pr-2 w-max"
        onMouseDown={() => window.open(feira.moreDetailsUrl, '_blank')}
      >
        Mais detalhes
      </button>
    </div>
  )
}