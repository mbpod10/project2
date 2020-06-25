# Project Overview

## Project Description

For this project, I plan to make a foreign exchange app. I will use React to naviaget throughout the application where I will allow the user to view different currencies and their different exhange rates.

## API

https://api.frankfurter.app/latest?from=USD

```{
"amount": 1,
"base": "USD",
"date": "2020-06-25",
"rates": {
"AUD": 1.4572,
"BGN": 1.7462,
"BRL": 5.3582,
"CAD": 1.3645,
"CHF": 0.94973,
"CNY": 7.072,
"CZK": 23.925,
"DKK": 6.6548,
"EUR": 0.89286,
"GBP": 0.80476,
"HKD": 7.7504,
"HRK": 6.7562,
"HUF": 316.38,
"IDR": 14275,
"ILS": 3.4415,
"INR": 75.634,
"ISK": 138.93,
"JPY": 107.37,
"KRW": 1203.33,
"MXN": 22.886,
"MYR": 4.278,
"NOK": 9.7096,
"NZD": 1.5594,
"PHP": 50.067,
"PLN": 3.9869,
"RON": 4.3232,
"RUB": 69.421,
"SEK": 9.3629,
"SGD": 1.3929,
"THB": 30.935,
"TRY": 6.855,
"ZAR": 17.4003
}
}
```

## Wireframes

Upload images of wireframe to imgur and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.
|(url)|

## Project Schedule

| Day   | Deliverable                                        | Status     |
| ----- | -------------------------------------------------- | ---------- |
| Day 1 | Project Description                                | Complete   |
| Day 1 | Wireframes / Priority Matrix / Timeline /WorkSheet | Complete   |
| Day 1 | Get Google Sheets Responsive                       | Complete   |
| Day 3 | Core Application Structure (HTML, CSS, etc.)       | Complete   |
| Day 4 | MVP & Bug Fixes                                    | Complete   |
| Day 5 | Final Touches                                      | Complete   |
| Day 6 | Present                                            | Incomplete |

## Google Sheet

Link To Google Docs:
https://docs.google.com/spreadsheets/d/17g2XPR7udYLKwDvOmYw0IfEqXHgZtaTuWMKwoBO0iSI/edit#gid=0

## Time/Priority Matrix

[Link]()

Include a full list of features that have been prioritized based on the `Time and Priority` Matix. This involves drawing a a square. In the middle of the square, on the x axis draw a line. The most left part of the line should start with 0hrs and the end of the line should include 2hrs. This line will be used to estimate how much time any one feature will take to complete.

Now draw a vertical line on the y axis. The top of this line should have `High` and the bottom `Low`. This line will be used to assign a priority to to each feature you wish to include in the project.

Now create a separate list starting with A and assign it one of the features. Continue to assign each feature a letter. Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter.

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo.

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP (examples)

- Pull data using google json api that allows projects to render on the page
- Render data, info, on the page
- have a basic aesthetic design
- have a lot of white space

#### PostMVP

- Create animation on the page
- Allow people to preview their favorites
- Have people able to contact me via website
- Have github host my works and not codepens
- make the webpage more interactive or even change its layout for better optimal viewership

## Functional Components

- The absolute most functionial component had to be the JSON rendering from GoogleSheets of my various projects
- Also, the page has to be resonsive that depends on what type of device the user is using
- Also, it has to present a clean and representation of my skill as a web designer

#### MVP

| Component               | Priority | Estimated Time | Actual Time Invetsted | Time |
| ----------------------- | :------: | :------------: | :-------------------: | :--: |
| Google Sheets Projects  |    H     |      3hrs      |         15min         |  NA  |
| Skeleton HTML           |    H     |      3hr       |        2.5hrs         |  NA  |
| Skeleton CSS for Mobile |    H     |      3hrs      |         5hrs          |  NA  |
| Hamburger               |    H     |      1hr       |         30min         |  NA  |
| Project Previews        |    H     |      3hr       |         15min         |  NA  |
| Regular Nav             |    H     |       H        |         2hrs          |  NA  |
| Adding Form             |    H     |     1.5hr      |          1hr          |  NA  |
| Other sections and flex |    M     |      4hr       |          4hr          |  NA  |
| Working with API        |    H     |      3hrs      |          2hr          |  NA  |
| Responsive              |    H     |      3hr       |          2hr          |  NA  |
| Social Media Icons      |    L     |      1hr       |          3hr          |  NA  |
| Styling                 |    M     |      5hrs      |         6hrs          |  NA  |
| Total                   |    H     |    15.5hrs     |       28.5 hrs        | -hrs |

#### PostMVP

| Component             | Priority | Estimated Time | Time Invetsted | Actual Time |
| --------------------- | :------: | :------------: | :------------: | :---------: |
| Project Hover         |    L     |      3hr       |      -hr       |     -hr     |
| Banner letters wiggle |    L     |      1hr       |      -hr       |     -hr     |
| Interactive Banner    |    M     |      4hr       |      -hr       |     -hr     |
| Materialize           |    H     |      4hr       |      -hr       |     -hr     |
| Bootstrap             |    H     |      4hr       |      -hr       |     -hr     |
| Make own icon         |    L     |      4hr       |      -hr       |     -hr     |
| Total                 |    H     |     20hrs      |      -hrs      |    -hrs     |

## Additional Libraries

JQuery, Bootstrap

## Code Snippet

```function app(projectsArr) {
  console.log("app-projects", projectsArr);
  projectsArr.forEach((project) => {
    let $div = $("<div>").attr("class", "card");
    let $title = $("<h5>").text(project.title).attr("class", "card-title");
    let $img = $("<img>")
      .attr("src", project.image)
      .attr("class", "card-img-top");
    let $description = $("<p>")
      .text(project.description)
      .attr("class", "card-text");
    let $link = $("<a>")
      .text("Go")
      .attr("href", project.url)
      .attr("class", "btn btn-primary");
    $div.append($title, $img, $description, $link);
    $(".work-container").append($div);
  });
}

<section>
        <h3 id="projects">My Projects</h3>
        <div class="work-container"></div>
      </section>
```

## Issues and Resolutions

My major issue was the styling on the page. I am not very artistic and I wished that I could make the page more pleasing to the eye. However, when it came to making the layout and putting everything on the page, I had almost no issues somehow. Bootstrap came in handy.

I did initially have some issues with the responsive design as the titles in the mobile version were becoming too large.

When it came to the JSON, I thought that it was going to take me over 4 hours to figure out, after the lecture, I had it done in 15 minutes. I even added bootstrap classes to the projects to show that I understood everything that was going on.

The one issue I did have was getting the <a> to link to my Google Sheets projects but then I realized that simple attr.() in jquery would allow me to add the 'href' of the project url.

#### SAMPLE.....

NONE
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier
**RESOLUTION**: Missing comma after first object in sources {} object

```

```
