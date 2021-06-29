## Project Description

Guitar Songbook will let users store the songs they learn on guitar and add new songs to the app.

### Component hierarchy

![component hierarchy](https://i.ibb.co/gWPq04X/hierarchy.png)

### Wireframes
 
#### Desktop 

![desktop wireframe](/images/desktop.png)

#### Desktop Song page 

![song page desktop](/images/song-page-desktop.png)

#### Mobile Wireframe

![mobile wireframe](/images/guitar-mobile-wireframe-png.png)

#### Form Mobile

![form page mobile](/images/guitar-mobile-wireframe-png.png)
#### Song Mobile

![song page mobile](/images/song-page-mobile.png)

## API and Data Sample

 

```json
EXAMPLE REQUEST
curl -v -X POST https://api.airtable.com/v0/appcsRpq76oJRyOde/Songs \
  -H "Authorization: Bearer keyIBiRwsmEgxNhEH" \
  -H "Content-Type: application/json" \
  --data '{
  "records": [
    {
      "fields": {
        "Date": "6/28/2011",
        "Song Name/Artist": "Alicia Keys- No One",
        "Tuning/Capo": "Standard/Capo 4th fret",
        "Chords": "G D Em C"
      }
    },
    {
      "fields": {
        "Date": "02/02/2013",
        "Song Name/Artist": "Maroon 5-She Will Be Loved",
        "Tuning/Capo": "Standard/Capo 3rd fret",
        "Chords": "Am G C F"
      }
    }
  ]
}'

```

## MVP/PostMVP

#### MVP
- Build using React

- Use react-router-dom

- 6 rendered components

- Functional and class components 

- Use Axios

- Use AirTable to get data 

- Make a get and post request

- CSS styling

- Flexbox or CSS Grid

- Responsive design for 2 screens

- Use semantic variables

- Indent properly


#### POST-MVP
- Favorite button

- Chords shape diagram

 

## Project Schedule

Colons can be used to align columns.

Component  | Estimated Time | Debugging | 
 --- | --- | --- | 
 Install axios react-router-dom dependencies| 2 hours
 Set up homepage| 2 hours
 Set up form page | 2 hours
 Set up song page | 2 hours
 Fetch data with GET Request | 2 hours
 Axios set Up | 2 hours
 Make Post request on Form Page | 3 hours
 Render Song Page | 3 hour
 Add basic styling on home page | 3 hours
 Add styling to form page| 3 hours
 Add styling to song page | 3 hours
 Desktop Media Query | 3 hours
 Mobile Media Query | 3 hours
 Debugging | 3 hours

## Time Table

| Component | Priority | Estimated Time |  
| ---| --- | ---- |
| Tuesday | H | 8 hours
| Wednesday | H | 8 hours 
| Thursday | H | 8 hours
| Friday | H | 8 hours
| Tuesday | H | 8 hours
|Wednesday | H | 8 hours
  
## SWOT Analysis

### Strengths
One of my strengths is styling with CSS

### Weaknesses
One of my weaknesses is React and class components

### Opportunities
This project will give me the opportnity to sharpen my skills in React 

### Threat
If I get stuck I tend to try and work on the same issue for a long time without asking for help. I'll make sure to ask more questions and avoid spending too much time on a project.