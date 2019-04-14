// https://gist.github.com/nuragic/ff9ee6212a6d335627e1fd17a81e8991
function getDuration(start) {
  const totalMonths = Math.floor((new Date() - new Date(start)) / 1000 / 60 / 60 / 24 / 30);
  const months = totalMonths < 12 ? totalMonths : totalMonths % 12;
  const years = Math.floor(totalMonths / 12);
  let duration = '';

  if (years === 0)
    if (months > 0)
      duration = `${months} months`;
  if (years > 0)
    if (months === 0)
      duration = `${years} years`;
    else
      duration = `${years} years, ${months} months`;

  return `(${duration})`;
};

const experience = [
  {
    "position":"Head of Front-end and UX",
    "company":"GlobalAVL",
    "period":{
      "start":"May 2018",
      "end":"Present",
      get duration() {
        return getDuration(this.start);
      },
      "location":"Madrid"
    },
    "description":"Leading the UI effort on building the next generation <strong>real-time fleet management software</strong> using <strong>React</strong>, <strong>GraphQL</strong>, <strong>Node.js</strong>, Geographic Information Systems, and more related exciting technologies such as RabbitMQ, Thrift, RTDB, Elastic Search, etc."
  },
  {
    "position":"Senior Front-end Developer / Front-end Lead",
    "company":"NEORIS",
    "period":{
      "start":"August 2015",
      "end":"April 2018",
      "duration":"(2 years, 9 months)",
      "location":"Madrid"
    },
    "description":"Crafting UIs for large scale web applications using <strong>JavaScript (ES6+)</strong>, <strong>React</strong>, <strong>Redux</strong>, <strong>Angular</strong>, <strong>WebPack</strong>, <strong>Node.js</strong>, etc. In charge of <strong>architecture</strong>, <strong>analysis</strong>, <strong>performance</strong>, <strong>mentorship</strong>, <strong>code review</strong>, <strong>development workflow</strong>, establishing <strong>best practices</strong> and <strong>guidelines</strong>, and more generally <em>continuously improving</em> <strong>UX</strong> and <strong>DX</strong>."
  },
  {
    "position":"Front-end Lead Engineer",
    "company":"Critizen",
    "period":{
      "start":"May 2015",
      "end":"July 2015",
      "duration":"(3 months)",
      "location":"Madrid"
    },
    "description":"Building the new front-end web architecture from scratch using the last cutting-edge technologies and techniques such as <strong>ES6</strong>, <strong>React</strong>, <strong>WebPack</strong>, <strong>NodeJS</strong>, <strong>Isomorphic/Universal JavaScript</strong> and <strong>Flux</strong>."
  },
  {
    "position":"Senior Front-end developer",
    "company":"BABEL",
    "period":{
      "start":"February 2014",
      "end":"April 2015",
      "duration":"(1 year, 3 months)",
      "location":"Madrid"
    },
    "description":"Enhancing performance and architecture of the brand new multi-device banking platform for <strong>ING Direct Spain</strong>. <strong>HTML5</strong>, <strong>CSS3</strong> (<strong>Stylus</strong>, <strong>RWD</strong>), <strong>JavaScript</strong> (<strong>Backbone</strong>, <strong>Marionette</strong>, <strong>RequireJS</strong>, <strong>NodeJS</strong>, <strong>Grunt</strong>)."
  },
  {
    "position":"Front-end developer",
    "company":"ADESIS Netlife",
    "period":{
      "start":"September 2013",
      "end":"January 2014",
      "duration":"(5 months)",
      "location":"Madrid"
    },
    "description":"Web apps development with <strong>HTML5</strong>, <strong>CSS3</strong> (<strong>Compass</strong>, <strong>Responsive Web Design</strong>), <strong>JavaScript</strong> (<strong>AngularJS</strong>, <strong>NodeJS,</strong> <strong>Yeoman</strong>, <strong>Grunt</strong>), <strong>Git</strong> and more."
  },
  {
    "position":"Front-end developer",
    "company":"Tutellus",
    "period":{
      "start":"May 2013",
      "end":"August 2013",
      "duration":"(4 months)",
      "location":"Madrid"
    },
    "description":"Boosting User Interface to the next level with <strong>HTML5</strong>, <strong>CSS3</strong> and <strong>JavaScript</strong> (<strong>Backbone</strong>, <strong>Marionette</strong>, <strong>RequireJS</strong>, <strong>jQuery</strong>, <strong>NodeJS</strong>)"
  },
  {
    "position":"Front-end developer",
    "company":"AURIGAE",
    "period":{
      "start":"January 2013",
      "end":"April 2013",
      "duration":"(4 months)",
      "location":"Madrid"
    },
    "description":"Developing cross-platform web applications with <strong>HTML5</strong>. The <strong>JavaScript</strong> stack includes <strong>Backbone</strong>, <strong>Marionette</strong>, <strong>jQuery</strong>, <strong>jQuery Mobile</strong>, <strong>underscore</strong>, <strong>RequireJS</strong>, <strong>PhoneGap</strong>, etc."
  },
  {
    "position":"Front-end Team Leader",
    "company":"Media Net Software",
    "period":{
      "start":"February 2012",
      "end":"January 2013",
      "duration":"(1 year)",
      "location":"Madrid"
    },
    "description":"Working on the new website of <strong>BBVA bank</strong> (launched on April, 2013). Writing <strong>HTML5</strong>, <strong>CSS3</strong> (<strong>SASS</strong>), modular <strong>JavaScript</strong> APIs (<strong>Backbone</strong>, <strong>underscore</strong>, <strong>jQuery</strong> &amp; more)."
  },
  {
    "position":"Web developer",
    "company":"Ticketea",
    "period":{
      "start":"July 2010",
      "end":"January 2012",
      "duration":"(1 year 7 months)",
      "location":"Madrid"
    },
    "description":"Building the product from scratch using <strong>SCRUM</strong>, <strong>TDD</strong>, <strong>LAMP</strong>, <strong>JavaScript</strong> (<strong>jQuery</strong>), <strong>XHTML</strong>, <strong>CSS</strong>, <strong>Git</strong>. Integrations with affiliates, <strong>Google and Facebook APIs</strong>."
  },
  {
    "position":"Web developer",
    "company":"Comunica+A",
    "period":{
      "start":"May 2009",
      "end":"June 2010",
      "duration":"(1 year 2 months)",
      "location":"Madrid"
    },
    "description":"Websites for clients such as Orange, Endesa, MRW, McDonalds, Wilkinson, Alfa Romeo, Lancia, Real Madrid FC, entradas.com, Mutua Madrile&#xf1;a, la Caixa, red.es, AECEM, etc. <strong>LAMP</strong>, <strong>XHTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>."
  },
  {
    "position":"Web developer",
    "company":"Arionline s.r.l.",
    "period":{
      "start":"2007",
      "end":"2009",
      "duration":"(2 years)",
      "location":"Cagliari Area, Italy"
    },
    "description":"Software programming, R&amp;D projects, web apps, with <strong>Open Source</strong> technology: <strong>PHP</strong> (<strong>Joomla</strong>), <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> (<strong>jQuery</strong>)."
  }
];

const data = {
  header: `<p>Spaghetti code hater, lasagna eater, <i>rock and roll</i> driven <strong>web developer</strong>. Born and raised in <i>Sardinia</i>.</p>`,
  experience,
  skillsetURL: 'https://gist.githubusercontent.com/nuragic/7bece2b662a7d98f6b15e3b36143f811/raw',
  languages: [
    'Italian', 'Spanish', 'English', 'Sardinian',
  ],
  links: [
    { href: "https://github.com/nuragic", title: "Github" },
    { href: "https://twitter.com/nuragic", title: "Twitter" },
    { href: "https://medium.com/@nuragic", title: "Medium" },
    { href: "https://linkedin.com/in/nuragic", title: "LinkedIn" },
    { href: "https://stackoverflow.com/story/nuragic", title: "StackOverflow" },
    { href: "https://theancientsecretsoflevitation.bandcamp.com/", title: "Bandcamp" },
  ],
};

export default data;
