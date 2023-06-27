# Prompt the user to confirm before continuing
read -p "Are you sure you want to create the HTML/CSS/JS starter files? (Y/N) " confirm

# Check if the user confirmed
if [[ $confirm == [Yy] ]]; then
  # Create the index.html file
  touch index.html

  # Create the style.css file
  touch style.css

  # Create the script.js file
  touch script.js

  # Add the basic html code to the index.html file
  title=$(basename "$(pwd)")
  echo "<!DOCTYPE html>
  <html lang=\"en\">
  <head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">
    <title>$title</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p>
    <script src=\"script.js\"></script>
  </body>
  </html>
  " > index.html

  # Add the basic css code to the style.css file
  echo "@import url(\"https://fonts.googleapis.com/css?family=Poppins:wght@200;400;600&display=swap\");

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: \"Poppins\", sans-serif;
  }
  " > style.css

  # Add the basic js code to the script.js file
  echo "console.log('Hello World');
  " > script.js
else
  echo "Aborted."
fi
