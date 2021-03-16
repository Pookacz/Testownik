/*
================================= Baza pytań twojego testownika =================================
-> Pierwsza pozycja w tabeli to pytanie.
-> Następne cztery pozycje to pytania (max. 4)
-> Ostatni element tablicy to indeks poprawnej odpowiedzi od 1 do 4.
-> Liczba pytań do dodania jest nieskończenie wielka.
-> Odpowiedzi do pytania mogą być tylko 4.
-> Poprawna odpowiedź może być tylko jedna.

-> Poniższe pytania są jedynie przykładem, należy je usunąć przed rozpoczęciem dodawania swoich.
=================================================================================================
*/
let examBase = [
    //Przykładowe pytanie
    ["sample question","Answer 1", "Answer 2", "Answer 3", "Answer 4", 1],
    //Pytanie 1
    ["Rachunkowość zarządcza koncentruje się na dostarczaniu informacji:","Z przyszłości i przeszłości","Z przyszłości","Z przeszłości", "Żadna z odpowiedzi nie jest poprawna", 1],
    //Pytanie 2
    ["Rachunek kosztów:","Nie zajmuje się ustaleniem kosztów w różnych przekrojach","Jest powiązany z tylko rachunkowością finansową","Zwiększa szczegółowość ewidencji kosztów","Żadne z powyższych", 4],
    //Pytanie 3
    ["W definicji kosztu nadrzędnym jest:","Celowość jego powstania","Konsekwencja wydatku","Wyrażenie w jednostkach pieniężnych","Przypadkowość",3],
    //Pytanie 4
    ["Klasyfikacja kosztów według rodzaju:", "Pozwala na ujęcie kosztów według jednorodnych składników", "W zależności od zakresu i struktury kosztów ponoszonych w przedsiębiorstwie oraz potrzeb informacyjnych, każda z wymienionych pozycji może ulec rozbiciu na elementy składowe", "Wszystkie odpowiedzi są prawidłowe", "Żadne z powyższych", 3],
    //Pytanie 5
    ["Wartość kosztu zmiennego nie zależy od:", "Fizycznej struktury wyrobu", "Cen zakupu surowców, półfabrykatów i materiałów", "Kosztów krańcowych własnej produkcji, półfabrykatów i części", "Kosztu amortyzacji używanych maszyn", 4],
   ];