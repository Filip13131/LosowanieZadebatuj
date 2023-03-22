import './App.css';
import { useState } from 'react';

function App() {

  const [players, setPlayers] = useState(['Martyna Rajchel',
    'Bartłomiej Dudziak',
    'Tomasz Racki',
    'Igor Szar',
    'Dawid Mikuła', 
    'Sebastian Surówka',
    'Jan Stępniewski', 
    'Maria Gawęda',
    'Oliwia Cich',
    'Teresa Kozaczewska', 
    'Zuzanna Zimna',
    'Lukasz Bartoszcze',
    'Jakub Batko',
    'Irena Worobkiewicz', 
    'Marta Kwasek',
    'Szymon Galicki',
    'Gabriela Czerniak',
    'Adrian Thrun',
    'Agnieszka Czyż-Mańkowska', 
    'Piotr Serdeń',
    'Jakub Maciejewski', 
    'Matylda Pindel',
    'Piotr Michalak',
    'Łukasz Zagrajek',
    'Julia Górna',
    'Kacper Pałczyński',
    'Grzegorz Chmiel',
    'Marek Gibasiewicz',
    'Beniamin Krok',
    'Katarzyna Widera', 
    'Iwo Kobylański',
    'Olga Wilk'
    ]);

  const [motions, setMotions] = useState(['1. Należy żałować rekreacyjnego posiadania zwierząt', 
    '2. Kościół katolicki powinien udzielać rozgrzeszenia osobom które popełniły przestępstwo, tylko pod warunkiem oddania się organom ścigania', 
    '3. Przedstawianie życia osób z niepełnosprawnościami jako inspirującego przynosi więcej szkód niż korzyści.',
    '4. UE powinna automatycznie gwarantować członkostwo każdemu krajowi powstałemu w skutek secesji od jednego z krajów członkowskich.',
    '5. Lepszy byłby świat w którym media przedstawiają śmierć jako naturalny proces z którym należy się godzić niż coś czego należy się obawiać.',
    '6. Drastyczny wzrost popularności cyfrowych środków przekazu informacji( social media, online news itp.) przynosi więcej szkód niż korzyści dla współczesnej demokracji.',
    '7. Pensje polityków powinny być równe medianie pensji w kraju w którym piastują urząd.',
    '8. Płacenie okupu powinno być przestępstwem.',
    '9. Ciągła demokracja to system w którym wyborca ma prawo zmienić swój głos w dowolnym momencie, co może prowadzić do zmiany składu parlamentu, w zależności od rozkładu poparcia w danej chwili. Teza: Ta Izba popiera ciągłą demokracje.',
    '10. Jesteś rodzicem przedszkolaka pochodzącym z klasy niższej. Dostrzegasz u swojego dziecka nadzwyczajne zdolności muzyczne, a twoje obserwacje są potwierdzane przez nauczycieli muzyki. Teza: Jako rodzic starałbym się zachęcić moje dziecko do skupienia się na rozwoju umiejętności kojarzonych z dobrze płatnymi zawodami (np. zdolności matematyczne)', 
    '11. Należy zezwolić na rynkową sprzedaż prawa do roszczenia odszkodowania w procesie cywilnym.', 
    '12. Disney powinien dążyć do przedstawiania w swoich filmach znacznie bardziej realistycznego obrazu miłości.', 
    '13. Osoby, które popełniły przestępstwo pierwszy raz powinny mieć możliwość zapłacić odszkodowanie pokrzywdzonemu (za jego zgodą) zamiast zostać skazanym na karę więzienia.', 
    '14. Ta Izba wierzy, że decyzje medyczne dotyczące zagrażających życiu dzieci czynników powinny być podejmowane przez specjalistów z zakresu medycyny, zamiast przez ich rodziców.',
    '15. Zakładając istnienie odpowiedniej technologii, należy usunąć zdolność żołnierzy do odczuwania strachu.',
    '16. Ta izba żałuje narracji mówiącej że wyższe wykształcenie nie jest już ważne w 21 wieku'
    ]);

    const [drawedPlayers, setDrawedPlayers] = useState([]);

    const [drawedMotions, setDrawedMotions] = useState([]);

    function getRandomPlayer() {
      const index = Math.floor(Math.random()*(players.length-1));    
      const temDrawedPlayers = [...drawedPlayers];
      temDrawedPlayers.push(players[index]);
      setDrawedPlayers(temDrawedPlayers);
      const temPlayers = [...players];
      temPlayers.splice(index, 1);
      setPlayers(temPlayers);
      console.log({players, drawedPlayers});
    };
    function getRandomMotion() {
      const index = Math.floor(Math.random()*(motions.length-1));    
      const temDrawedPlayers = [...drawedMotions];
      temDrawedPlayers.push(motions[index]);
      setDrawedMotions(temDrawedPlayers);
      const temPlayers = [...motions];
      temPlayers.splice(index, 1);
      setMotions(temPlayers);
    };
    



  return (
    <div className="App">
      <div className='abcd'>
        <div className='UndrawedPlayers'>
          {players.map((player, i)=>(
            <div className='Player'>
              {(i+1)+ '. ' + player}
            </div>
          ))}

        </div>
        <div className='DrawedPlayers'>
          {drawedPlayers.map((drawedPlayer, i)=>(
            <div className='DrawedPlayer'>
              {(i+1)+ '. ' + drawedPlayer}
            </div>
          ))}
          <button className='buttonA' onClick={getRandomPlayer}>WYLOSUJ UCZESTNIKA</button>
        </div>
      </div>
      <div className='DrawedMotions'>
        {drawedMotions.map((drawedMotion, i)=>(
          <div className='DrawedMotion'>
            {drawedMotion}
          </div>
        ))}
        <button className='buttonA' onClick={getRandomMotion}>WYLOSUJ TEZE</button>
      </div>
      <div className='UndrawedMotions'>
        {motions.map((motion, i)=>(
          <div className='Motion'>
            {motion}
          </div>
        ))}
        </div>
    </div>
  );
}

export default App;
