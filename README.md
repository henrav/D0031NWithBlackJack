D0031N Fixa Canvas-Ladok
ENV fil kommer kaosa lite troligtvist
1. Skapa en .env-fil
Skapa en ny fil kallad .env. enklast att skapa en env fil inuti själva projektet. bara högerklicka någonstans på någon map och klicka "new -> file" och döp den till ".env". sedan är det bara att flyta på den till skrivbordet tillexempel. kom bara ihåg fil vägen till den så man kan fixa det.

2. Sedan behöver dessa saker stå i env filen. kan behöva kolla i eran mysql workbench om några av dessa behöver ändras. lösen kommer garanterat behöva ändras men andra saker som user och port kan också.

  DB_USER=root                # din MySQL-användare

  DB_PASSWORD=hemligt_farligt  # lösenord (exempel)

  DB_HOST=localhost            # din host, vanligtvis localhost

  DB_PORT=3006                 # dubbelkolla att denna stämmer

  DB_NAME=mydb                 # denna ska inte ändras


3. förhoppningsvis är dotenv redan installerat men det kan vara så att den inte är det. då behöver ni navigera till server i terminalen. skapa en ny terminal och se till att ni är i det översta mappen. sedan behöver ni bara skriva

"cd server"

sedan skriver ni 

"npm install dotenv"

4. sedan behöver ni i "server->CreateDatabase.js" skriva

require('dotenv').config({ path: 'eran/fil/väg/till/.env' });
