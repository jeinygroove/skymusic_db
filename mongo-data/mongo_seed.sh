mongoimport --authenticationDatabase=admin --uri="mongodb://root:root@mongo:27017/music_db?ssl=false&authSource=admin" --db='music_db' --collection='tracks' --type='csv' --file='/tmp/track.csv' --headerline