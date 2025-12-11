Za pokretanje ove aplikacije potrebno je u korijen direktorija bookstore_client dodati .env datoteku koja sadrži atribut NEXT_PUBLIC_API_URL koji je potrebno postaviti na adresu koju koristi naš server, 
u mom slučaju je to bilo localhost:8080. Potrebno je inicijalizirati projekt klijenta unosom naredbe npm install u terminal i onda se može pokrenuti pokreatnjem naredbe npm run dev u terminalu na adresi unutar samog direktorija bookstore_client.

Za kreiranje servera ja sam koristion Intellij IDEA tako da je za pokretanje potrebno samo otvoriti direktorija bookstore_server u Intellij IDEA i onda će se sve samo pokrenuti i instalirait pomoću pom.xml-a i mavena.
